// Imports imports objects holding MBTI data & information
import {data, mbtiInformation} from './data.js';



// Declares global variables
const menuIcon = document.getElementById('menu-icon');
const menuOverlay = document.getElementById('nav-overlay');
const menuItems = document.querySelectorAll('.menu-item');

const rawDatatable = document.querySelector('.raw-data-table');
const rawDataTableHead = document.querySelector('.raw-data-table-head');
const rawDataTableBody = document.querySelector('.raw-data-table-body');

const informationMBTIContainer = document.querySelector('.information-MBTI-container')

// Adds event open and close overlay function to menu hamburger function
if(menuIcon){
    toggleMenu(menuIcon);
}

// Sets margins for bar graph svg
const svg1margin = {top: 20, right: 20, bottom: 30, left: 40};

// Waits for document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Draws bar graph svg
    createBarGraph(".bar-graph-1", svg1margin, 800, 500);

    // Checks if the raw data table div exists on the current page
    if(rawDatatable){

        // Populates the raw data table with all data used in the data visualizations;
        populateTable(rawDatatable, rawDataTableHead, rawDataTableBody, data);

        // References the raw data table filter
        let rawDataForm = document.querySelector('form[name="filter-raw-data"]');

        // Listens for when the raw data table filter is submitted
        rawDataForm.addEventListener('submit', function(event){
            // Prevents default action of 'submit', which would cause page to reload
            event.preventDefault();
            // Repopulates raw data table with filtered results
            filterAndPopulateTable(rawDataForm);
        });
    }

    // Checks if MBTI information divs exist on page
    if(informationMBTIContainer){
        // Populates each div with a name of an MBTI
        populateInformationMBTI(mbtiInformation);
        
        // Adds event listeners which reveal the description of the MBTI upon being clicked
        addDescriptionFunction()   
    }

    // Listens for resizing of viewport to see if navigation menu inline styles should be removed
    window.addEventListener('resize', checkViewport);

    // Checks if visualization container exist on page
    if(document.getElementById('visualization')){
        // Draws 'under construction' svg
        interactiveDataVisualization();
    }
    
    
    
    
});







// Draws bar graph svg using d3.js
function createBarGraph(svgSelect, margin, widthSelect, heightSelect){
    const svg = d3.select(svgSelect);
    const width = + widthSelect - margin.left - margin.right;
    const height = heightSelect - margin.top - margin.bottom;
    const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    // Process data to count MBTI types
    const mbtiCounts = {};
    data.forEach(student => {
        mbtiCounts[student.MBTI] = (mbtiCounts[student.MBTI] || 0) + 1;
    });

    const x = d3.scaleBand()
        .rangeRound([0, width])
        .padding(0.1)
        .domain(Object.keys(mbtiCounts));

    const y = d3.scaleLinear()
        .rangeRound([height, 0])
        .domain([0, d3.max(Object.values(mbtiCounts))]);

    // Append the x-axis
    g.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x));

    // Append the y-axis
    g.append("g")
        .call(d3.axisLeft(y).ticks(10))
        .append("text")
        .attr("fill", "#dde2e3")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        // .text("Frequency");

    // Draw bars
    g.selectAll(".bar")
        .data(Object.entries(mbtiCounts))
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", d => x(d[0]))
        .attr("y", d => y(d[1]))
        .attr("width", x.bandwidth())
        .attr("height", d => height - y(d[1]))
        .attr("fill", "#1F51FF");
}

// filters data and repopulates the raw data table with the filtered results
function filterAndPopulateTable(){
    // References the value of the MBTI selection of the raw data table filter
    const mbtiFilter = document.querySelector('select[name="filter-raw-data-MBTI"]').value;

    // References the value of the assertive or turbulent selection of the raw data filter
    const assertiveTurbulentFilter = document.querySelector('select[name="filter-raw-data-assertiveTurbulent"]').value;

    // References the value of the program selection of the raw data filter
    const programFilter = document.querySelector('select[name="filter-raw-data-program"]').value;

    // References the value of the occupation selection of the raw data filter
    const roleFilter = document.querySelector('select[name="filter-raw-data-occupation"]').value;

    // Filters the data, only includes the selections of the raw data table filter
    let filteredData = data.filter(student =>{
        return(mbtiFilter === 'NONE' || student.MBTI === mbtiFilter) &&
              (assertiveTurbulentFilter === 'NONE' || student.assertiveTurbulent === assertiveTurbulentFilter) &&
              (programFilter === 'NONE' || student.program === programFilter) &&
              (roleFilter === 'NONE' || student.role === roleFilter);
    });

    // Repopulates the raw data table with the filtered results
    populateTable(rawDatatable, rawDataTableHead, rawDataTableBody, filteredData, data);  
}

// Populates the raw data filter
function populateTable(tableClass, tableHeadClass, tableBodyClass, tableData){

    // Clears previously existing table elements
    tableHeadClass.innerHTML = '';
    tableBodyClass.innerHTML = '';

    // Creates a header row element
    const headerRow = document.createElement('tr');
    
    // Checks if data array for table is empty
    if(tableData.length > 0){
        // Cycles through the keys of the first object of the data array
        Object.keys(tableData[0]).forEach(key =>{
            // Creates a table header cell element
            const cell = document.createElement('th');
            // Adds the table header item class to the header cell element
            cell.classList.add('raw-data-table-head-item');
            // Sets text content of the header cell element to the current key name
            cell.textContent = key;
            
            // Appends the header element to the header row element
            headerRow.appendChild(cell);
        });

        // Appends the header row element to the table header container
        tableHeadClass.appendChild(headerRow);

        // Cycles through each object in the data array
        tableData.forEach(individual =>{
            // Creates a table body row element
            const dataRow = document.createElement('tr');

            // Cycles through the values of the current object
            Object.values(individual).forEach(value =>{
                // Creates a table data cell element
                const cell = document.createElement('td');
                // Adds table body item class to the body cell element
                cell.classList.add('raw-data-table-body-item');
                // Sets the text content of the table body cell to the current value
                cell.textContent = value;
                // Appends the table body cell element to the table body row element
                dataRow.appendChild(cell);
            });

            // Appends the table body row element to the table body container 
            tableBodyClass.appendChild(dataRow);
        })
    }else{
        // Cycles through the keys of the first object of the data array
        Object.keys(data[0]).forEach(key =>{
            // Creates a table header cell element
            const cell = document.createElement('th');
            // Adds the table header item class to the header cell element
            cell.classList.add('raw-data-table-head-item')
            // Sets the text content of the header cell element to the current key
            cell.textContent = key;
            
            // Appends the header cell element to the header row element
            headerRow.appendChild(cell);
        });
        
        // Appends the header row element to the table header container
        tableHeadClass.appendChild(headerRow);
    }

    // Appends the table head container to the table container 
    tableClass.appendChild(tableHeadClass);

    // Appends the table body container to the table container
    tableClass.appendChild(tableBodyClass);



}

// Populates the MBTI information divs
function populateInformationMBTI(mbtiInfo){
    
    // circulates through the keys of the object
    Object.keys(mbtiInfo).forEach(key =>{

        // References the div which the key refers to
        const mbtiContainer = document.querySelector('.information-MBTI-container-' +key);

        // Creates h1 element
        const titleElement = document.createElement('h1');

        // Sets text content of h1 element to the current key name
        titleElement.innerHTML = key;

        // Sets mbti-id attribute of div to the current key name
        mbtiContainer.setAttribute('mbti-id', key);
        
        // Appends h1 element to its respective div
        mbtiContainer.appendChild(titleElement);

    })
    
}

// Function to toggle the navigation overlay menu
function toggleMenu(menuToggle){
    // listens for click on the hamburger menu icon
    menuToggle.addEventListener('click', function(){
        // toggle hamburger menu transition to an X
        menuToggle.classList.toggle('active');

        // Checks to see if overlay is open or not
        if(menuToggle.classList.contains('active')){
            // Opens the navigation overlay menu
            menuOverlay.style.width = '100%';
            menuOverlay.style.height = '100%';
            menuOverlay.style.borderRadius = '0% 0% 0% 0% / 0% 0% 0% 0%';

            // Makes each navigation menu visible 
            menuItems.forEach(item =>{
                item.style.display = "block";
            })
        }else{
            // Closes navigation overlay menu
            menuOverlay.style.width = '0';
            menuOverlay.style.height = '0';
            menuOverlay.style.borderRadius = '0% 0% 0% 50% / 0% 0% 0% 50%';

            // Makes navigation menu items invisible    
            menuItems.forEach(item =>{
                item.style.display = "none";
            })
        }
    });
}

// Function that clears inline styles that prevents navigation menu items from being seen on laptop resolution sizes
function clearInlineStyles(){
    // Removes all inline styles set in the toggleMenu() function
    menuOverlay.style.width = '';
    menuOverlay.style.height = '';
    menuOverlay.style.borderRadius = '';
    menuItems.forEach(item =>{
        item.style.display = "";
    })   
}

// Function that calls the clearInlineStyles() function when viewport enters laptop resolution size
function checkViewport() {
    const mediaQuery = window.matchMedia('(min-width: 1021px)');
    if (mediaQuery.matches) {
        // If the viewport is wider than 1020 pixels, clears inline styles
        clearInlineStyles();
    }
}

// Function that opens description div when an MBTI information div is clicked, then populates the div with the description of the MBTI
function addDescriptionFunction() {
    // Cycles through each div within a .information-MBTI-row
    document.querySelectorAll('.information-MBTI-row > div').forEach(div => {
        // Adds an event listener to each div which listens for when the div is clicked on
        div.addEventListener('click', function() {
            // Retrieves the mbti-id value of the div
            const divID = this.getAttribute('mbti-id');
            // References all MBTI description containers
            const allDescriptionContainers = document.querySelectorAll('.information-MBTI-description-row');
            // Checks if the MBTI information div has already been clicked on
            const isDivActive = div.classList.contains('info-active');

            // Cycles through each MBTI description container
            allDescriptionContainers.forEach(otherContainer => {
                // Deactivates each description container
                otherContainer.classList.remove('active-information-MBTI-description-row');
                // Removes all existing text
                const existingTextH1 = otherContainer.querySelector('h1');
                if(existingTextH1){
                    existingTextH1.remove();
                }
                const existingTextP = otherContainer.querySelector('p');
                if (existingTextP) {
                    existingTextP.remove();
                }
            });

            // Cycles through each description container
            allDescriptionContainers.forEach(container => {
                // Checks if description container is assigned to the clicked div and 
                if (container.classList.contains('desc-' + divID) && !isDivActive){

                        // Hightlights the MBTI information div that was clicked on 
                        div.classList.add('info-active')

                        // Activates the assigned description row div
                        container.classList.add('active-information-MBTI-description-row');

                        // Creates an h1 element
                        const descriptorText = document.createElement('h1');

                        // Sets the text content of the h1 element to the descriptor of the clicked MBTI
                        descriptorText.innerHTML = mbtiInformation[divID].descriptor;
                        // Appends the h1 element to the description container 
                        container.append(descriptorText);

                        // Creates a paragraph element
                        const descriptionText = document.createElement('p');
                        // Sets the text content of the h1 element to the description of the clicked MBTI
                        descriptionText.innerHTML = mbtiInformation[divID].description;
                        // Appends the paragraph element to the description container 
                        container.append(descriptionText);
                    

                    
                }
            });

            // Cycles through all MBTI information divs
            document.querySelectorAll('.information-MBTI-row > div').forEach(otherDiv =>{
                // Removes highlights for any other MBTI divs other than the currently selected MBTI
                if(otherDiv !== div || isDivActive){
                    otherDiv.classList.remove('info-active');
                }
            });

        });
    });
}

// Draws 'under construction; graphic using d3.js
function interactiveDataVisualization(){
    const svgWidth = 200, svgHeight = 300;
    const data = [
        { letter: 'U', value: 20 },
        { letter: 'N', value: 15 },
        { letter: 'D', value: 10 },
        { letter: 'E', value: 5 },
        { letter: 'R', value: 20 },
        { letter: 'C', value: 15 },
        { letter: 'O', value: 10 },
        { letter: 'N', value: 5 },
        { letter: 'S', value: 20 },
        { letter: 'T', value: 15 },
        { letter: 'R', value: 10 },
        { letter: 'U', value: 5 },
        { letter: 'C', value: 20 },
        { letter: 'T', value: 15 },
        { letter: 'I', value: 10 },
        { letter: 'O', value: 5 },
        { letter: 'N', value: 20 }
    ];

    const svg = d3.select('#visualization')
                  .append('svg')
                  .attr('width', svgWidth)
                  .attr('height', svgHeight);

    const xScale = d3.scaleBand()
                     .domain(data.map(d => d.letter))
                     .range([0, svgWidth])
                     .padding(0.4);

    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(data, d => d.value)])
                     .range([svgHeight, 0]);

    svg.selectAll('.bar')
       .data(data)
       .enter()
       .append('rect')
       .classed('bar', true)
       .attr('x', d => xScale(d.letter))
       .attr('y', d => yScale(d.value))
       .attr('width', xScale.bandwidth())
       .attr('height', d => svgHeight - yScale(d.value))
       .attr('fill', '#202628');

    svg.selectAll('.label')
       .data(data)
       .enter()
       .append('text')
       .text(d => d.letter)
       .attr('x', d => xScale(d.letter) + xScale.bandwidth() / 2)
       .attr('y', d => yScale(d.value) - 5)
       .attr('text-anchor', 'middle')
       .attr('fill', '#dde2e3')
       .style('font-family', 'Source Sans Pro, sans-serif');
    
    

}


    
    
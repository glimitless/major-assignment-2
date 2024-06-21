import {data, mbtiInformation} from './data.js';




const menuIcon = document.getElementById('menu-icon');
const menuOverlay = document.getElementById('nav-overlay');
const menuItems = document.querySelectorAll('.menu-item');

const rawDatatable = document.querySelector('.raw-data-table');
const rawDataTableHead = document.querySelector('.raw-data-table-head');
const rawDataTableBody = document.querySelector('.raw-data-table-body');

const informationMBTIContainer = document.querySelector('.information-MBTI-container')

if(menuIcon){
    toggleMenu(menuIcon);
}


const svg1margin = {top: 20, right: 20, bottom: 30, left: 40};

document.addEventListener('DOMContentLoaded', function() {

    createBarGraph(".bar-graph-1", svg1margin, 800, 500);

    if(rawDatatable){

        populateTable(rawDatatable, rawDataTableHead, rawDataTableBody, data);

        let rawDataForm = document.querySelector('form[name="filter-raw-data"]');
        rawDataForm.addEventListener('submit', function(event){
            event.preventDefault();
            filterAndPopulateTable(rawDataForm);
        });
    }

    if(informationMBTIContainer){
        populateInformationMBTI(mbtiInformation);
        
        addDescriptionFunction()
        
    }
    window.addEventListener('resize', checkViewport);

    interactiveDataVisualization();
    
    
    
});








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
function filterAndPopulateTable(){
    const mbtiFilter = document.querySelector('select[name="filter-raw-data-MBTI"]').value;
    const assertiveTurbulentFilter = document.querySelector('select[name="filter-raw-data-assertiveTurbulent"]').value;
    const programFilter = document.querySelector('select[name="filter-raw-data-program"]').value;
    const roleFilter = document.querySelector('select[name="filter-raw-data-occupation"]').value;

    let filteredData = data.filter(student =>{
        return(mbtiFilter === 'NONE' || student.MBTI === mbtiFilter) &&
              (assertiveTurbulentFilter === 'NONE' || student.assertiveTurbulent === assertiveTurbulentFilter) &&
              (programFilter === 'NONE' || student.program === programFilter) &&
              (roleFilter === 'NONE' || student.role === roleFilter);
    });

    
    populateTable(rawDatatable, rawDataTableHead, rawDataTableBody, filteredData, data);

    
}
function populateTable(tableClass, tableHeadClass, tableBodyClass, tableData){

    tableHeadClass.innerHTML = '';
    tableBodyClass.innerHTML = '';
    const headerRow = document.createElement('tr');
    
    if(tableData.length > 0){

        Object.keys(tableData[0]).forEach(key =>{
            
            const cell = document.createElement('th');
            cell.classList.add('raw-data-table-head-item')
            cell.textContent = key;
            
            headerRow.appendChild(cell);
        
        });
        tableHeadClass.appendChild(headerRow);

    
        tableData.forEach(individual =>{
            const dataRow = document.createElement('tr');

            Object.values(individual).forEach(value =>{
                const cell = document.createElement('td');
                cell.classList.add('raw-data-table-body-item')
                cell.textContent = value;
                dataRow.appendChild(cell);
            });
            tableBodyClass.appendChild(dataRow);
        })
    }else{
        Object.keys(data[0]).forEach(key =>{
            
            const cell = document.createElement('th');
            cell.classList.add('raw-data-table-head-item')
            cell.textContent = key;
            
            headerRow.appendChild(cell);
        });

        tableHeadClass.appendChild(headerRow);
    }

    tableClass.appendChild(tableHeadClass);
    tableClass.appendChild(tableBodyClass);



}

function populateInformationMBTI(mbtiInfo){
    
    
    Object.keys(mbtiInfo).forEach(key =>{

        const mbtiContainer = document.querySelector('.information-MBTI-container-' +key);

        const titleElement = document.createElement('h1');

        titleElement.innerHTML = key;

        mbtiContainer.setAttribute('mbti-id', key);
        // console.log(mbtiContainer.getAttribute('mbti-id'));

        mbtiContainer.appendChild(titleElement);

    })
    
}

function toggleMenu(menuToggle){
    menuToggle.addEventListener('click', function(){
        menuToggle.classList.toggle('active');
        if(menuToggle.classList.contains('active')){
            menuOverlay.style.width = '100%';
            menuOverlay.style.height = '100%';
            menuOverlay.style.borderRadius = '0% 0% 0% 0% / 0% 0% 0% 0%';
            menuItems.forEach(item =>{
                item.style.display = "block";
            })
        }else{
            menuOverlay.style.width = '0';
            menuOverlay.style.height = '0';
            menuOverlay.style.borderRadius = '0% 0% 0% 50% / 0% 0% 0% 50%';
            menuItems.forEach(item =>{
                item.style.display = "none";
            })
        }
    });
}
function clearInlineStyles(){
   
    menuOverlay.style.width = '';
    menuOverlay.style.height = '';
    menuOverlay.style.borderRadius = '';
    menuItems.forEach(item =>{
        item.style.display = "";
    })   
}

function checkViewport() {
    const mediaQuery = window.matchMedia('(min-width: 1021px)');
    if (mediaQuery.matches) {
        // If the viewport is wider than 1020 pixels, clears inline styles
        clearInlineStyles();
    }
}


function addDescriptionFunction() {
    document.querySelectorAll('.information-MBTI-row > div').forEach(div => {
        div.addEventListener('click', function() {
            const divID = this.getAttribute('mbti-id');
            const allDescriptionContainers = document.querySelectorAll('.information-MBTI-description-row');
            const isDivActive = div.classList.contains('active');

            // First, deactivate all containers and remove existing text
            allDescriptionContainers.forEach(otherContainer => {
                otherContainer.classList.remove('active-information-MBTI-description-row');
                const existingTextH1 = otherContainer.querySelector('h1');
                if(existingTextH1){
                    existingTextH1.remove();
                }
                const existingTextP = otherContainer.querySelector('p');
                if (existingTextP) {
                    existingTextP.remove();
                }
            });

            // Now, activate the clicked container if it was not active before
            allDescriptionContainers.forEach(container => {
                if (container.classList.contains('desc-' + divID)) {
                    const isActive = container.classList.contains('active-information-MBTI-description-row');
                    
                    
                    


                    if(!isActive && !isDivActive){
                        div.classList.add('active')
                        container.classList.add('active-information-MBTI-description-row');
                        const descriptorText = document.createElement('h1');
                        descriptorText.innerHTML = mbtiInformation[divID].descriptor;
                        container.append(descriptorText);

                        const descriptionText = document.createElement('p');
                        descriptionText.innerHTML = mbtiInformation[divID].description;
                        container.append(descriptionText);
                    }

                    
                }
            });

            document.querySelectorAll('.information-MBTI-row > div').forEach(otherDiv =>{
                if(otherDiv !== div || isDivActive){
                    otherDiv.classList.remove('active');
                }
            });

        });
    });
}

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


    
    
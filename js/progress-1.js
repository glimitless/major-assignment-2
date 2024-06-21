import data from './data.js';




const menuIcon = document.getElementById('menu-icon');
const menuOverlay = document.getElementById('nav-overlay');
const menuItems = document.querySelectorAll('.menu-item');

const rawDatatable = document.querySelector('.raw-data-table');
const rawDataTableHead = document.querySelector('.raw-data-table-head');
const rawDataTableBody = document.querySelector('.raw-data-table-body');



if(menuIcon){
    toggleMenu(menuIcon);
}


const svg1margin = {top: 20, right: 20, bottom: 30, left: 40};

document.addEventListener('DOMContentLoaded', function() {

    createBarGraph("svg", svg1margin, 800, 500);
    if(rawDatatable){
        populateTable(rawDatatable, rawDataTableHead, rawDataTableBody, data.students);
    }
    
});








function createBarGraph(svgSelect, margin, widthSelect, heightSelect){
    const svg = d3.select(svgSelect);
    const width = + widthSelect - margin.left - margin.right;
    const height = heightSelect - margin.top - margin.bottom;
    const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    // Process data to count MBTI types
    const mbtiCounts = {};
    data.students.forEach(student => {
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


function populateTable(tableClass, tableHeadClass, tableBodyClass, tableData){

    
    
    const headerRow = document.createElement('tr');

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

    tableClass.appendChild(tableHeadClass);
    tableClass.appendChild(tableBodyClass);



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



    
    
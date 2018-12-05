;
(function () {
    "use strict";

    const xhr = new XMLHttpRequest();

    const employeeList = document.querySelector('.employeeList'),
        employeTmpl = document.getElementById('employe-tmpl').innerHTML;
    let team = [];

    xhr.open('GET', './data/employees.json');
    xhr.send();
    employeeList.innerHTML = '';

    xhr.onload = function () {

        if (xhr.readyState === 4) {

            let employeMan = '';

            const data = JSON.parse(xhr.response);

            team = data;

            for (let i = 0; i < team.length; i++) {

                const manName = team[i].name;
                const manStatus = team[i].inoffice;
                let status;
                
                if(manStatus == true){
                    status = 'ba-inoffice'
                }else if(manStatus == false){
                     status = 'ba-outoffice'
                }
                employeMan = employeTmpl.replace(/{{name}}/ig, manName)
                             .replace(/{{class}}/ig, status);

                employeeList.innerHTML += employeMan;
            }
        }
    }


})();
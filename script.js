
// This is the JavaScript code that handles the logic
function generateTables() {
    // Get the input value and split it by semicolons
    let input = document.getElementById("input").value;
    let data = input.split(";");
    // Get the div where the tables will be appended
    let tables = document.getElementById("tables");
    // Clear the previous tables if any
    tables.innerHTML = "";
    // Loop through the data array and create a table for every four values
    for (let i = 0; i < data.length; i += 4) {
        // Create a table element
        let table = document.createElement("table");
        table.border = "1";
        // Create the first row with the rota value
        let row1 = document.createElement("tr");
        let cell1 = document.createElement("td");
        cell1.textContent = "Rota:";
        let cell2 = document.createElement("td");
        cell2.className = "rota";
        cell2.colSpan = "4";
        cell2.textContent = data[i];
        row1.appendChild(cell1);
        row1.appendChild(cell2);
        table.appendChild(row1);
        // Create the second row with the cliente and codigo values
        let row2 = document.createElement("tr");
        let cell3 = document.createElement("td");
        cell3.textContent = "Cliente:";
        let cell4 = document.createElement("td");
        cell4.className = "cliente";
        cell4.colSpan = "2";
        cell4.textContent = data[i+1];
        let cell5 = document.createElement("td");
        cell5.textContent = "Cód:";
        let cell6 = document.createElement("td");
        cell6.className = "codigo";
        cell6.colSpan = "2";
        cell6.textContent = data[i+2];
        row2.appendChild(cell3);
        row2.appendChild(cell4);
        row2.appendChild(cell5);
        row2.appendChild(cell6);
        table.appendChild(row2);
        // Create the third row with the data value
        let row3 = document.createElement("tr");
        let cell7 = document.createElement("td");
        cell7.textContent = "Data:";
        let cell8 = document.createElement("td");
        cell8.className = "data";
        cell8.colSpan = "4";
        // Get the current date in dd/mm/yyyy format
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        cell8.textContent = day + "/" + month + "/" + year;
        row3.appendChild(cell7);
        row3.appendChild(cell8);
        table.appendChild(row3);
        // Create the fourth row with the valor a receber atual value
        let row4 = document.createElement("tr");
        let cell9 = document.createElement("td");
        cell9.textContent = "Valor a receber atual:";
        let cell10 = document.createElement("td");
        cell10.className = "valorAReceberAtual";
        cell10.colSpan = "4";
        cell10.textContent = "";
        row4.appendChild(cell9);
        row4.appendChild(cell10);
        table.appendChild(row4);
        // Create the fifth row with the valor a receber anterior value
        let row5 = document.createElement("tr");
        let cell11 = document.createElement("td");
        cell11.textContent = "Valor a receber anterior:";
        let cell12 = document.createElement("td");
        cell12.className = "valorAReceberAnterior";
        cell12.colSpan = "4";
        cell12.textContent = "";
        row5.appendChild(cell11);
        row5.appendChild(cell12);
        table.appendChild(row5);
        // Create the sixth row with the forma de pagamento value
        let row6 = document.createElement("tr");
        let cell13 = document.createElement("td");
        cell13.textContent = "Forma de pagamento:";
        let cell14 = document.createElement("td");
        cell14.className = "formaDePagamento";
        cell14.colSpan = "4";
        cell14.textContent = data[i+3];
        row6.appendChild(cell13);
        row6.appendChild(cell14);
        table.appendChild(row6);
        // Create the seventh row with the PIX value
        let row7 = document.createElement("tr");
        let cell15 = document.createElement("td");
        cell15.colSpan = "5";
        cell15.textContent = "PIX: 07.842.195/0001-66 (Brasil Temper Comércio de Vidro)";
        row7.appendChild(cell15);
        table.appendChild(row7);
        // Create the eighth row with the contact information
        let row8 = document.createElement("tr");
        let cell16 = document.createElement("td");
        cell16.colSpan = "5";
        cell16.textContent = "Qualquer dúvida entrar em contato: 61 9 9808-8698 / 61 9 9568-9014 / 61 9 9851-2976";
        row8.appendChild(cell16);
        table.appendChild(row8);
        // Append the table to the div
        tables.appendChild(table);
    }
}
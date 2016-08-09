;(function(){

    var locations = {
        "states": [
            {
                "All": {
                    "cities": [
                        {"Any": {"email": "pokemonnearyou@gmail.com"}}
                    ]
                },
            }
        ]
    };

    var generateRows = function (locations) {
        var table = document.getElementById("locations");
        var states = locations.states;
        for (var i = 0; i < states.length; ++i) {
            for (state in states[i]) {
                for (cities in states[i][state]) {
                    for (var j=0; j < states[i][state][cities].length; ++j) {
                        var city_list = states[i][state][cities][j];
                        for (var city in city_list) {
                            var email = city_list[city].email;
                            appendRow(table, state, city, email);
                        }
                    }
                }
            }
        }
    }

    var appendRow = function (table, state, city, email) {
        var row = table.insertRow();
        var state_td = row.insertCell();
        var city_td = row.insertCell();
        var email_td = row.insertCell();
        state_td.innerHTML = state;
        city_td.innerHTML = city;
        email_td.innerHTML = email;
    }

    generateRows(locations);

})();

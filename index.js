const fs = require('fs');

const API_KEY = "patRUpBeeifv109br.f615a44205bfc0332ac62afae81405accdc1d7f0055f14454d7c46e26f31be08";
const URL = "https://api.airtable.com/v0/appOcPmkuwy3wxipe/Banks";


async function getData() {
    try {
        const response = await fetch(URL, {
            headers: {
                Authorization: `Bearer ${API_KEY}`
            }
        })
        const data = await response.json();
        const transformedData = transformData(data);
        console.log(transformedData);
        fs.writeFile("./data.json", JSON.stringify(transformedData, null, 4), err => {
                if (err) {
                    console.error(err);
                }
            }
        );
    } catch (e) {
        console.log(e);
    }
}

const transformData = (originalData) => {
    return originalData.records.map(record => record.fields);
};


getData();
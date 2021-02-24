const getCount = (array, item) =>{
    let count = 0;
    for(let i = 0; i < array.length; ++i){
        if(array[i] === item)
            count++;
    }
    return count;
}

module.exports = ({
                      studentName, gender, cfiNumber, expDate, signedDate, endorsements, generic_info, tsa_info, student_info
}) => {

    const generic = require("./resources/generic_endorsements");
    const studentPilot = require("./resources/student_pilot_endorsements");
    const tsa = require("./resources/tsa_endorsements")
    const additional_student_pilot = require("./resources/additional_student_pilot_endorsements");

    //Super ugly. There is a better way but I cant be bothered.
    //TODO: Find a cleaner way to get the student_info data.
    const makeModel = student_info.makeModel;
    const A5_airport= student_info.A5_airport;
    const A8_airport= student_info.A8_airport;
    const A8_limitations= student_info.A8_limitations;
    const category= student_info.category;
    const A10_origin_airport= student_info.A10_origin_airport;
    const A10_route= student_info.A10_route;
    const A10_landings= student_info.A10_landings;
    const A10_date = student_info.A10_date;
    const A10_limitations = student_info.A10_limitations;
    const A11_airport = student_info.A11_airport;
    const A11_limitations = student_info.A11_limitations;
    const A12_classB = student_info.A12_classB;
    const A12_limitations = student_info.A12_limitations;
    const A13_airport = student_info.A13_airport;
    const A13_limitations = student_info.A13_limitations;
    const A15_airspace = student_info.A15_airspace;
    const A15_airport = student_info.A15_airport;
    const A15_limitations = student_info.A15_limitations;
    const A16_airport = student_info.A16_airport;
    const A16_limitations = student_info.A16_limitations;

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        table{
            width: 48%;
            height: 16%;
            margin: 1px;
            padding: 1px;
            border: 1px solid #eee;
            font-size: 10px;
            line-height: 14px;
            font-family: "Times New Roman", Times, serif;,
             color: #555;
            display: inline-block;
            align-self: center;
        }
        .floatLeft{float: left}
        .floatRight{float: right}
        .endorsement_text{
            font-size: .75em;
        }
        .title{
            font-weight: bold; !important;
            font-size: 1em;
            text-align: left;
        }
        .signature{
            font-size: 0.8em;
        }
        .signature_block {
            width: 100px;
            border: 0;
            border-bottom: 1px solid #000;
            padding-right: 20px;
        }
        .date_block {
            border: 0;
            border-bottom: 1px solid #000;
        }

    </style>
</head>
<body>
${Array(getCount(endorsements,"A1")).join(0).split(0).map(() => `
    ${endorsements.includes("A1")? generic.A1({studentName, gender , generic_info, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A2")).join(0).split(0).map(() => `
    ${endorsements.includes("A2")? generic.A2({studentName, gender, generic_info, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A3")).join(0).split(0).map(() => `
    ${endorsements.includes("A3")? studentPilot.A3({studentName, makeModel, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A4")).join(0).split(0).map(() => `
    ${endorsements.includes("A4")? studentPilot.A4({studentName, makeModel, gender, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A5")).join(0).split(0).map(() => `
    ${endorsements.includes("A5")? studentPilot.A5({studentName, A5_airport, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A6")).join(0).split(0).map(() => `
    ${endorsements.includes("A6")? studentPilot.A6({studentName, gender, makeModel, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A7")).join(0).split(0).map(() => `
    ${endorsements.includes("A7")? studentPilot.A7({studentName, gender, makeModel, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A8")).join(0).split(0).map(()=> `
    ${endorsements.includes("A8")? studentPilot.A8({studentName, gender, A8_airport, A8_limitations, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A9")).join(0).split(0).map(()=> `
    ${endorsements.includes("A9")? studentPilot.A9({studentName, gender, makeModel, category, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A10")).join(0).split(0).map(()=> `
    ${endorsements.includes("A10")? studentPilot.A10({studentName, A10_origin_airport, A10_route, makeModel, A10_date,A10_landings, A10_limitations, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A11")).join(0).split(0).map(()=> `
    ${endorsements.includes("A11")? studentPilot.A11({studentName, A11_airport, gender, A11_limitations, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A12")).join(0).split(0).map(()=> `
    ${endorsements.includes("A12")? studentPilot.A12({studentName, gender, A12_classB, A12_limitations, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A13")).join(0).split(0).map(()=> `
    ${endorsements.includes("A13")? studentPilot.A13({studentName, gender, A13_airport, A13_limitations, signedDate, cfiNumber, expDate}):""}
  `).join('')}

${Array(getCount(endorsements,"A14")).join(0).split(0).map(()=> `
    ${endorsements.includes("A14")? tsa.A14({studentName, tsa_info, gender, signedDate, cfiNumber, expDate}):""}
  `).join('')}

${Array(getCount(endorsements,"A15")).join(0).split(0).map(()=> `
    ${endorsements.includes("A15")? additional_student_pilot.A15({studentName, gender, A15_airspace, A15_airport, A15_limitations, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A16")).join(0).split(0).map(()=> `
    ${endorsements.includes("A16")? additional_student_pilot.A16({studentName, gender, A16_airport, A16_limitations, signedDate, cfiNumber, expDate}):""}
  `).join('')}
</body>
</html>
`;
};




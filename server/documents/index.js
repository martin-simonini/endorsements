module.exports = ({studentName}, {gender}) => {
    const today = new Date();

    let a1 = `
    <table class="floatLeft">
        <tr>
            <td class="title">
                Prerequisites for practical test: Title 14 of the Code of Federal Regulations
                (14 CFR) part <a href="https://www.ecfr.gov/cgi-bin/text-idx?SID=dbefbaa41e3aa85833650f1d6095d35f&mc=true&node=pt14.2.61&rgn=div5"> 61</a>,
                <a href="https://www.ecfr.gov/cgi-bin/text-idx?SID=1591c6e8551c6684d54f2bb87bcd6345&mc=true&node=se14.2.61_139&rgn=div8">§ 61.39(a)(6)(i)</a>
                and <a href="https://www.ecfr.gov/cgi-bin/text-idx?SID=1591c6e8551c6684d54f2bb87bcd6345&mc=true&node=se14.2.61_139&rgn=div8">(ii)</a>
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received and logged training time within
                2 calendar-months preceding the month of application in preparation for the practical test
                and ${gender} is prepared for the required practical test for the issuance of [applicable]
                certificate. <br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12"/> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" /> Exp. Date <input type="text" class="date_block" size="12" /> </td>
        </tr>
    </table>`;

    let a2 = `
    <table class="floatRight">
        <tr>
            <td class="title">
                Review of deficiencies identified on airman knowledge test: § 61.39(a)(6)(iii),
                as required.
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has demonstrated satisfactory knowledge of the
                subject areas in which ${gender} was deficient on the [applicable] airman knowledge
                test. <br><br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12"/> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" /> Expiration Date <input type="text" class="date_block" size="12" /> </td>
        </tr>
    </table>
    `;

    let a3 = `
    <table class="floatLeft">
        <tr>
            <td class="title">
                Pre-solo aeronautical knowledge: § 61.87(b)
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has satisfactorily completed the pre-solo
                knowledge test of § 61.87(b) for the [make and model] aircraft.
                test. <br><br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12"/> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" /> Expiration Date <input type="text" class="date_block" size="12" /> </td>
        </tr>
    </table>
    `;

    let a4 = `
    <table class="floatRight">
        <tr>
            <td class="title">
                Pre-solo flight training: § 61.87(c)(1) and (2).
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received and logged pre-solo flight training
                for the maneuvers and procedures that are appropriate to the [make and model] aircraft. I
                have determined [he or she] has demonstrated satisfactory proficiency and safety on the
                maneuvers and procedures required by § 61.87 in this or similar make and model of
                aircraft to be flown. <br><br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12"/> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" /> Expiration Date <input type="text" class="date_block" size="12" /> </td>
        </tr>
    </table>
    `;

    let a5 = `
    <table class="floatRight">
        <tr>
            <td class="title">
                Pre-solo flight training at night: § 61.87(o).
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received flight training at night on night
                flying procedures that include takeoffs, approaches, landings, and go-arounds at night at
                the [airport name] airport where the solo flight will be conducted; navigation training at
                night in the vicinity of the [airport name] airport where the solo flight will be conducted.
                This endorsement expires 90 calendar-days from the date the flight training at night was
                received. <br><br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12"/> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" /> Expiration Date <input type="text" class="date_block" size="12" /> </td>
        </tr>
    </table>
    `;

    let a6 = `
    <table class="floatRight">
        <tr>
            <td class="title">
                Solo flight (first 90 calendar-day period): § 61.87(n).
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required training to qualify for
                solo flying. I have determined [he or she] meets the applicable requirements of § 61.87(n)
                and is proficient to make solo flights in [make and model]. <br><br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12"/> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" /> Expiration Date <input type="text" class="date_block" size="12" /> </td>
        </tr>
    </table>
    `;

    let a7 = `
    <table class="floatRight">
        <tr>
            <td class="title">
                Solo flight (each additional 90 calendar-day period): § 61.87(p).

            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required training to qualify for
                solo flying. I have determined that [he or she] meets the applicable requirements of
                § 61.87(p) and is proficient to make solo flights in [make and model]. <br><br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12"/> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" /> Expiration Date <input type="text" class="date_block" size="12" /> </td>
        </tr>
    </table>
    `;

    let a8 = `
    <table class="floatRight">
        <tr>
            <td class="title">
                Solo takeoffs and landings at another airport within 25 nautical miles (NM):
                § 61.93(b)(1).
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required training of
                § 61.93(b)(1). I have determined that [he or she] is proficient to practice solo takeoffs and
                landings at [airport name]. The takeoffs and landings at [airport name] are subject to the
                following conditions: [List any applicable conditions or limitations.] <br><br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12"/> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" /> Expiration Date <input type="text" class="date_block" size="12" /> </td>
        </tr>
    </table>
    `;


    return `
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        table{
            /*max-width: 800px;*/
            /*margin: auto;*/
            /*padding: 30px;*/
            /*font-family: "Times New Roman", Times, serif;*/
            max-width: 375px;
            height: 250px;
            margin: 5px 0px 5px 0px;
            padding: 5px;
            border: 1px solid #eee;
            font-size: 16px;
            line-height: 24px;
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
${a1}
${a2}
${a3}
${a4}
${a5}
${a6}
${a7}
${a8}


    `;
};
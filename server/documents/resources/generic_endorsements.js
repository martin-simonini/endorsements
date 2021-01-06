

const A1 = ({studentName, gender, generic_info, signedDate, cfiNumber, expDate}) => {
    return `
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
                and ${gender} is prepared for the required practical test for the issuance of ${generic_info[0]}
                certificate. <br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" /> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>`}

const A2 = ({studentName, gender, generic_info, signedDate, cfiNumber, expDate}) => {
    return`
    <table class="floatLeft">
        <tr>
            <td class="title">
                Review of deficiencies identified on airman knowledge test: § 61.39(a)(6)(iii),
                as required.
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has demonstrated satisfactory knowledge of the
                subject areas in which ${gender} was deficient on the ${generic_info[1]} airman knowledge
                test. <br><br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

module.exports = {
    A1: A1,
    A2: A2
}

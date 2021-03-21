const A55 = ({studentName, A55_type, signedDate, cfiNumber, expDate}) => {
    return `
    <table class="floatLeft">
        <tr>
            <td class="title">
                Ground instructor who does not meet the recent experience requirements
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has demonstrated knowledge in the subject areas prescribed for a ${A55_type} ground instructor under § 61.213(a)(3) and (a)(4), as appropriate. <br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" /> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>`}


module.exports = {
    A55: A55
}
const A15 = ({studentName, gender, A15_airspace, A15_airport, A15_limitations, signedDate, cfiNumber, expDate}) => {
    return `
    <table class="floatLeft">
        <tr>
            <td class="title">
                Solo flight in Class B, C, and D airspace: § 61.94(a).
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required training of § 61.94(a).
                I have determined ${gender} is proficient to conduct solo flights in ${A15_airspace} airspace and authorized to operate to, from through and at ${A15_airport}.
                ${A15_limitations} <br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" /> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>`}

const A16 = ({studentName, gender, A16_airport, A16_limitations, signedDate, cfiNumber, expDate}) => {
    return`
    <table class="floatLeft">
        <tr>
            <td class="title">
                Solo flight to, from, or at an airport located in Class B, C, or D airspace or at an airport having an operational control tower: §§ 61.94(a) and 91.131(b)(1). 
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required training of
                § 61.94(a)(1). I have determined that ${gender} is proficient to conduct solo flight
                operations at ${A16_airport}. ${A16_limitations}  <br><br>
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
    A15: A15,
    A16: A16
}
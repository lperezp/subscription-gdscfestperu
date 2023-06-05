export const emailTemplate = (username: string, linkTicket: string) =>
    `
<table id="bodyTable"
    style="border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; height: 100%; margin: 0; padding: 0; width: 100%; background-color: #fafafa;"
    border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
    <tbody>
        <tr>
            <td id="bodyCell"
                style="mso-line-height-rule: exactly; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; height: 100%; margin: 0; padding: 10px; width: 100%; border-top: 0;"
                align="center" valign="top"><!-- BEGIN TEMPLATE // --> <!-- [if (gte mso 9)|(IE)]>
                        <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                        <tr>
                        <td align="center" valign="top" width="600" style="width:600px;">
                        <![endif]--><!-- [if (gte mso 9)|(IE)]>
                        </td>
                        </tr>
                        </table>
                        <![endif]--> <!-- // END TEMPLATE -->
                <table class="m_-2259358181362946609container"
                    style="border-collapse: collapse; margin: 0 auto; font: 400 14px/22px 'Google Sans',Arial,sans-serif; color: #3c4043;"
                    role="presentation" border="0" width="600" cellspacing="0" cellpadding="0" align="center"
                    bgcolor="#FFFFFF">
                    <tbody>
                        <tr>
                            <td style="background-color: #ffffff; width: 100%; font-size: 0; line-height: 0;"
                                bgcolor="#FFFFFF"> </td>
                        </tr>
                        <tr>
                            <td style="background-color: #1a73e8; width: 100%; font-size: 0; line-height: 0; color: #ffffff; text-align: center;"
                                bgcolor="#1a73e8">
                                <table
                                    style="width: 100%; margin: 0px; border-collapse: collapse; color: rgb(255, 255, 255); text-align: center; height: 522.304px;"
                                    role="presentation" border="0" cellspacing="0" cellpadding="0" align="center"
                                    bgcolor="#1a73e8">
                                    <tbody>
                                        <tr style="height: 236.992px;">
                                            <td
                                                style="font: 400 0px / 0 Arial; padding: 64px 0px 6px; height: 236.992px;">
                                                <img class="CToWUd a6T" style="width: 640px; height: 237px;"
                                                    tabindex="0" src="https://i.ibb.co/QvqQTRq/Banner-Mail.png" alt=""
                                                    width="600" height="222" data-bit="iit">
                                            </td>
                                        </tr>
                                        <tr style="height: 85px;">
                                            <td class="m_-2259358181362946609fs64"
                                                style="font: 400 64px / 78px 'Google Sans', Arial, sans-serif; height: 85px;">
                                                <span style="vertical-align: inherit;"> <span
                                                        style="vertical-align: inherit;">¡Y estás dentro!</span> </span>
                                            </td>
                                        </tr>
                                        <tr style="height: 74.2969px;">
                                            <td class="m_-2259358181362946609fs28"
                                                style="font: 400 28px / 34px 'Google Sans', Arial, sans-serif; padding: 36px 0px 0px; height: 74.2969px;">
                                                <span style="vertical-align: inherit;"> <span
                                                        style="vertical-align: inherit;"> Gracias por registrarse</span>
                                                </span> <span style="vertical-align: inherit;"> <span
                                                        style="vertical-align: inherit;"> en el</span></span><br><span
                                                    style="vertical-align: inherit;"> <span
                                                        style="vertical-align: inherit;">GDSC Fest Perú 2023. </span>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr style="height: 88.9648px;">
                                            <td
                                                style="font: 400 0px / 0 Arial; padding: 38px 0px 52px; height: 88.9648px;">
                                                <table style="margin: 0 auto; border-collapse: collapse;"
                                                    role="presentation" border="0" cellspacing="0" cellpadding="0"
                                                    align="center">
                                                    <tbody>
                                                        <tr>
                                                            <td class="m_-2259358181362946609col"
                                                                style="padding: 8px; display: inline-block;"
                                                                align="center"><a
                                                                    style="display: inline-block; background-color: #ffffff; color: #1a73e8; font: 400 25px/68px 'Google Sans',Arial,sans-serif; padding: 0px 48px; border-radius: 34px; text-decoration: none;"
                                                                    href="${linkTicket}" target="_blank"
                                                                    rel="noopener">Ver mi entrada</a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 80px 0;" align="center">
                                <table
                                    style="width: 90%; max-width: 480px; margin: 0 auto; border-collapse: collapse; color: #3c4043; letter-spacing: -.2px;"
                                    role="presentation" border="0" cellspacing="0" cellpadding="0" align="center"
                                    bgcolor="#FFFFFF">
                                    <tbody>
                                        <tr>
                                            <td class="m_-2259358181362946609fs22"
                                                style="padding: 0 0px 8px 0; font: 400 21px/32px 'Google Sans',Arial,sans-serif;">
                                                <span style="vertical-align: inherit;"><span
                                                        style="vertical-align: inherit;">Hola</span></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="m_-2259358181362946609fs34"
                                                style="padding: 8px 0px 24px 0; font: 400 34px/42px 'Google Sans',Arial,sans-serif; color: #1a73e8;">
                                                <span style="vertical-align: inherit;"> <span
                                                        style="vertical-align: inherit;">${username}</span></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="m_-2259358181362946609fs22"
                                                style="padding: 18px 0px 18px 0; font: 400 21px/32px 'Google Sans',Arial,sans-serif;">
                                                <span style="vertical-align: inherit;"> <span
                                                        style="vertical-align: inherit;">Visite el </span> </span><a
                                                    style="color: #1a73e8;"
                                                    href="https://www.gdscfestperu.com/?utm_medium=email&amp;utm_source=events&amp;utm_campaign=confirm"
                                                    target="_blank" rel="noopener"> <span
                                                        style="vertical-align: inherit;"> <span
                                                            style="vertical-align: inherit;">sitio web</span> </span>
                                                </a> <span style="vertical-align: inherit;"> <span
                                                        style="vertical-align: inherit;"> para obtener las últimas
                                                        actualizaciones. </span> <span
                                                        style="vertical-align: inherit;">También puede permanecer
                                                        conectado a la conversación en curso en
                                                        #GDSCFestPerú2023.</span> </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="m_-2259358181362946609fs22"
                                                style="padding: 18px 0px 18px 0; font: 400 21px/32px 'Google Sans',Arial,sans-serif;">
                                                <span style="vertical-align: inherit;"> <span
                                                        style="vertical-align: inherit;">Si tiene alguna pregunta,
                                                        comuníquese con nosotros a </span> </span><a
                                                    style="color: #1a73e8;" href="mailto:gdsc.peru@gmail.com"
                                                    target="_blank" rel="noopener">gdsc.peru@gmail.com</a> <span
                                                    style="vertical-align: inherit;"> <span
                                                        style="vertical-align: inherit;"> .</span> </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="m_-2259358181362946609fs22"
                                                style="padding: 18px 0 0 0; font: 400 21px/32px 'Google Sans',Arial,sans-serif;">
                                                <span style="vertical-align: inherit;"><span
                                                        style="vertical-align: inherit;">Nos vemos pronto, </span>
                                                </span><br><span style="vertical-align: inherit;"> <span
                                                        style="vertical-align: inherit;">El equipo de GDSC
                                                        Perú.</span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td bgcolor="#E8F0FE">
                                <table style="width: 100%; margin: 0 auto; border-collapse: collapse;"
                                    role="presentation" border="0" cellspacing="0" cellpadding="0" align="left"
                                    bgcolor="#E8F0FE">
                                    <tbody>
                                        <tr>
                                            <td style="padding: 40px 0 0 3%; text-align: center; font: 400 0/0 Arial;"
                                                align="center" valign="top" width="22%"><img class="CToWUd"
                                                    style="height: auto; width: 40px; margin: 0 auto;"
                                                    src="https://ci3.googleusercontent.com/proxy/zMuIofnAScVqMyrmspAf3nisORkG9P1nLuJ4MukuelEnN05z5LguFxlXIOFI701PeQ5ibnWE0cldAd2z7vaR-mQr9AcdPYDSNc6bRdJ8dm6q-6O_1KXvi3aq3GjWguAEWxg=s0-d-e1-ft#https://services.google.com/fh/files/emails/icon_light_bulb_blu_circ_2x_40x.png"
                                                    alt="" width="40" height="40" data-bit="iit"></td>
                                            <td style="width: 78%; padding: 40px 0 40px 0;" align="left" valign="top">
                                                <table
                                                    style="width: 98%; max-width: 430px; margin: 0 auto 0 0; border-collapse: collapse;"
                                                    role="presentation" border="0" cellspacing="0" cellpadding="0">
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                style="font: 400 10px/15px Arial,sans-serif; padding-bottom: 15px;">
                                                                <span style="vertical-align: inherit;"> <span
                                                                        style="vertical-align: inherit;">Recibió este
                                                                        correo electrónico porque se </span>
                                                                </span><span class="il"> <span
                                                                        style="vertical-align: inherit;"> <span
                                                                            style="vertical-align: inherit;">registró</span>
                                                                    </span> </span> <span
                                                                    style="vertical-align: inherit;"> <span
                                                                        style="vertical-align: inherit;"> en GDSC Fest
                                                                        Perú. Si no desea recibir más correos
                                                                        electrónicos sobre este </span> </span><span
                                                                    class="il"> <span style="vertical-align: inherit;">
                                                                        <span
                                                                            style="vertical-align: inherit;">evento</span>
                                                                    </span> </span> <span
                                                                    style="vertical-align: inherit;"> <span
                                                                        style="vertical-align: inherit;"> o cree que
                                                                        recibió este mensaje por error, </span>
                                                                </span><a style="color: #1a73e8;"
                                                                    href="mailto:gdsc.peru@gmail.com" target="_blank"
                                                                    rel="noopener"
                                                                    data-saferedirecturl="https://www.google.com/url?q=https://events.withgoogle.com/optout/bcf687b0fb6e4835a874e8bcd8406027/&amp;source=gmail&amp;ust=1686078102979000&amp;usg=AOvVaw3rK34gw--be6ch_E2AbS9v">
                                                                    <span style="vertical-align: inherit;"> <span
                                                                            style="vertical-align: inherit;">cancele la
                                                                            suscripción aquí</span> </span> </a> <span
                                                                    style="vertical-align: inherit;"> <span
                                                                        style="vertical-align: inherit;"> .</span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="font: 400 10px/15px Arial,sans-serif;"><span
                                                                    style="vertical-align: inherit;"> <span
                                                                        style="vertical-align: inherit;">© 2023 GDSC
                                                                        Fest Perú 2023.</span></span></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
`;
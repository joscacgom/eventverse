import React from 'react'
import { PrivacyPolicyContainer, PrivacyPolicyHeader, PrivacyPolicyBody, PrivacyPolicyTitle, PrivacyPolicyText, PrivacyPolicyParagraph } from './styles'
const PrivacyPolicy = () => {
  return (
       <PrivacyPolicyContainer>
            <PrivacyPolicyHeader>
                <PrivacyPolicyTitle>Política de Privacidad</PrivacyPolicyTitle>
            </PrivacyPolicyHeader>
            <PrivacyPolicyBody data-testid="privacy-policy-body">
                <PrivacyPolicyText>
                    <PrivacyPolicyParagraph>
                        El presente Política de Privacidad establece los términos en que EventVerse usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. Esta aplicación está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento. Sin embargo, esta Política de Privacidad puede cambiar con el tiempo o ser actualizada, por lo que le recomendamos y enfatizamos revisar continuamente esta página para asegurarse de que está de acuerdo con dichos cambios.
                    </PrivacyPolicyParagraph>
                </PrivacyPolicyText>
            </PrivacyPolicyBody>
            <PrivacyPolicyHeader>
                <PrivacyPolicyTitle>Información que se recoge</PrivacyPolicyTitle>
            </PrivacyPolicyHeader>
            <PrivacyPolicyBody>
                <PrivacyPolicyText>
                    <PrivacyPolicyParagraph>
                        Nuestro sitio web puede recopilar información personal, como su nombre, información de contacto (por ejemplo, su dirección de correo electrónico). Ningun otro tipo de dato es recopilado por EventVerse.
                    </PrivacyPolicyParagraph>
                </PrivacyPolicyText>
            </PrivacyPolicyBody>
            <PrivacyPolicyHeader>
                <PrivacyPolicyTitle>Información de terceras partes</PrivacyPolicyTitle>
            </PrivacyPolicyHeader>
            <PrivacyPolicyBody>
                <PrivacyPolicyText>
                    <PrivacyPolicyParagraph>
                        Nuestro sitio web le permite crear una cuenta e iniciar sesión para usar el Servicio a través de los Servicios de redes sociales de terceros soportados en la aplicación.
                        Si decide registrarse mediante dichos servicios, podemos recopilar datos personales que ya están asociados con la cuenta de Su Servicio de redes sociales de terceros, como su nombre, su dirección de correo electrónico y su foto de perfil.
                        Ningun dato extra de su cuenta de redes sociales será compartido con EventVerse.
                    </PrivacyPolicyParagraph>
                </PrivacyPolicyText>
            </PrivacyPolicyBody>
            <PrivacyPolicyHeader>
                <PrivacyPolicyTitle>Uso de la información recopilada</PrivacyPolicyTitle>
            </PrivacyPolicyHeader>
            <PrivacyPolicyBody>
                <PrivacyPolicyText>
                    <PrivacyPolicyParagraph>
                        Nuestro sitio web utiliza la información recopilada para proporcionar el mejor servicio posible,
                        especialmente para mantener un registro de usuarios, y para mejorar nuestros productos y
                        servicios. Es posible que se envíen correos electrónicos por cada compra realizada en la aplicación,
                        nuevos eventos y otra información publicitaria que consideremos relevante para usted o que pueda brindarle algún beneficio.
                        Estos correos electrónicos se enviarán a la dirección que usted proporcione y podrán ser cancelados en cualquier momento.
                        EventVerse está altamente comprometido para cumplir con el compromiso de mantener su información segura.
                        Usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que no exista ningún acceso no autorizado.
                    </PrivacyPolicyParagraph>
                </PrivacyPolicyText>
            </PrivacyPolicyBody>
             <PrivacyPolicyHeader>
                <PrivacyPolicyTitle>Cookies</PrivacyPolicyTitle>
            </PrivacyPolicyHeader>
            <PrivacyPolicyBody>
                <PrivacyPolicyText>
                    <PrivacyPolicyParagraph>
                       Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso para almacenarse en su ordenador, al aceptar dicho fichero se crea y la cookie sirve entonces para tener información respecto al tráfico web, y también facilita las futuras visitas a una web recurrente. Otra función que tienen las cookies es que con ellas las web pueden reconocerte individualmente y por tanto brindarte el mejor servicio personalizado de su web.
                       Nuestro sitio web emplea las cookies para poder guardar la sesión del usuario que se registra e inicia sesión en nuestra plataforma. Esta información es empleada únicamente para ofrecer la mejor experiencia de usuario posible. Ningún otro dato es recopilado por EventVerse.
                    </PrivacyPolicyParagraph>
                </PrivacyPolicyText>
            </PrivacyPolicyBody>

            <PrivacyPolicyHeader>
                <PrivacyPolicyTitle>Enlaces a Terceros</PrivacyPolicyTitle>
            </PrivacyPolicyHeader>
            <PrivacyPolicyBody>
                <PrivacyPolicyText>
                    <PrivacyPolicyParagraph>
                      Este sitio web pudiera contener enlaces a otros sitios que pudieran ser de su interés. Una vez que usted de clic en estos enlaces y abandone nuestra página, ya no tenemos control sobre al sitio al que es redirigido y por lo tanto no somos responsables de los términos o privacidad ni de la protección de sus datos en esos otros sitios terceros. Dichos sitios están sujetos a sus propias políticas de privacidad por lo cual es recomendable que los consulte para confirmar que usted está de acuerdo con estas.
                    </PrivacyPolicyParagraph>
                </PrivacyPolicyText>
            </PrivacyPolicyBody>

            <PrivacyPolicyHeader>
                <PrivacyPolicyTitle>Control de su información personal</PrivacyPolicyTitle>
            </PrivacyPolicyHeader>
            <PrivacyPolicyBody>
                <PrivacyPolicyText>
                    <PrivacyPolicyParagraph>
                      Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea requerido por un juez con un orden judicial.
                      EventVerse Se reserva el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento.
                    </PrivacyPolicyParagraph>
                </PrivacyPolicyText>
            </PrivacyPolicyBody>
        </PrivacyPolicyContainer>
  )
}

export default PrivacyPolicy

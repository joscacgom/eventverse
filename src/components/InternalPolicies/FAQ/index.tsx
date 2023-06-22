import React from 'react'
import { Container, Header, Body, Title, Text, Paragraph } from './styles'
const FAQ = () => {
  return (
       <Container>
            <Header>
                <Title>FAQ</Title>
            </Header>
            <Header>
                <Title>¿Cómo es el proceso de compra?</Title>
            </Header>
            <Body>
                <Text data-testid="question1-paragraph">
                    <Paragraph>
                        El proceso de compra en EventVerse es muy sencillo, solo debes seguir los siguientes pasos:
                    </Paragraph>
                    <Paragraph>
                        1. Selecciona el evento que deseas comprar.
                    </Paragraph>
                    <Paragraph>
                        2. Selecciona la cantidad de entradas que deseas comprar.
                    </Paragraph>
                    <Paragraph>
                        3. Selecciona el método de pago. (Tarjeta de Crédito/Débito o Wallet de criptomonedas)
                    </Paragraph>
                    <Paragraph>
                        4. Si seleccionas el método de pago con tarjeta de crédito/débito, ingresa los datos de tu tarjeta y confirma la compra.
                    </Paragraph>
                    <Paragraph>
                        5. Si seleccionas el método de pago con Wallet de criptomonedas, conectate con Metamask y confirma la compra.
                    </Paragraph>

                    <Paragraph>
                        6. ¡Listo! Ya tienes tus entradas.
                    </Paragraph>
                </Text>

            </Body>
            <Header>
                <Title>¿Qué son los tickets NFT?</Title>
            </Header>
            <Body>
                <Text>
                    <Paragraph>
                       Los NFT son unidades de datos en una cadena de bloques que representan activos digitales únicos y auténticos, como obras de arte, videos, música y coleccionables virtuales. A diferencia de las criptomonedas, los tokens NFT no son intercambiables uno por otro debido a su singularidad. Proporcionan autenticidad y rastreo de la procedencia de los activos digitales, y pueden incluir cláusulas de regalías para los creadores. Son utilizados en diferentes estándares de blockchain, como ERC-721 y ERC-1155 en Ethereum.
                    </Paragraph>
                </Text>
            </Body>
            <Header>
                <Title>¿Cuáles son las ventajas de los tickets NFT?</Title>
            </Header>
            <Body>
                <Text>
                    <Paragraph>
                        Los tickets en formato NFT tienen ventajas significativas, como la autenticidad respaldada por la tecnología blockchain, la exclusividad y escasez, la transferibilidad segura, el rastreo de derechos y regalías, la interoperabilidad, una experiencia digital mejorada y la prevención de falsificaciones. Estas ventajas brindan beneficios tanto para los organizadores de eventos como para los compradores al ofrecer mayor seguridad, exclusividad y oportunidades de monetización en comparación con los tickets tradicionales.
                    </Paragraph>
                </Text>
            </Body>
            <Header>
                <Title>¿Dónde puedo ver los tickets que he comprado?</Title>
            </Header>
            <Body>
                <Text>
                        <Paragraph>
                            1. Si has comprado un ticket con tu Wallet de criptomonedas, puedes verlo en la sección de Mis Tickets en tu perfil y en tu Wallet de criptomonedas.
                        </Paragraph>
                        <Paragraph>
                            2. Si has comprado un ticket con tu tarjeta de crédito/débito, puedes verlo en la sección de Mis Tickets en tu perfil. Y en el correo electrónico que te enviamos con la confirmación de la compra gracias a Crossmint.
                        </Paragraph>
                </Text>
            </Body>
             <Header>
                <Title>Soy organizador ¿Cómo creo un evento? ¿Cómo funciona la emisión de NFTs?</Title>
            </Header>
            <Body>
                <Text>
                        <Paragraph>
                            1. El organizador debe registrarse en EventVerse, mediante una de las opciones que ofrecemos para el registro. No es necesario crear una wallet de criptomonedas para registrarse, se generará una y se vinculará a tu cuenta automáticamente.
                        </Paragraph>
                        <Paragraph>
                            2. El organizador debe de tener fondos en su wallet de criptomonedas para poder crear el evento. Para ello debe de interactuar con el icono de la wallet en la parte inferior izquierda de la pantalla y seleccionar la opción de “Depositar fondos”.
                        </Paragraph>
                        <Paragraph>
                            3. El organizador debe crear un evento en EventVerse en el formualario de creación de evento.
                        </Paragraph>
                        <Paragraph>
                            4. Una colección de NFTs será creada en la blockchain de Polygon de manera automática y asociada al evento durante el proceso de creación.
                        </Paragraph>
                        <Paragraph>
                            5. ¡Listo! Ya tienes tu evento creado.
                        </Paragraph>
                </Text>
            </Body>
            <Header>
                <Title>¿Cuáles son las restricciones que puedo definir en un evento?</Title>
            </Header>
            <Body>
                <Text>
                        <Paragraph>
                            1. El organizador puede definir el número máximo de tickets que se pueden comprar por usuario.
                        </Paragraph>
                        <Paragraph>
                            2. El organizador puede definir la fecha de comienzo y de fin de la venta de tickets (Periodo de compra).
                        </Paragraph>
                        <Paragraph>
                            3. El organizador puede definir la fecha de comienzo y de fin del evento (Periodo de validez).
                        </Paragraph>
                        <Paragraph>
                            4. El organizador puede definir el precio de los tickets.
                        </Paragraph>
                        <Paragraph>
                            5. El organizador puede definir el número de tickets que se ponen a la venta.
                        </Paragraph>
                        <Paragraph>
                            6. El organizador puede definir el número de tickets que se ponen a la venta por cada transacción.
                        </Paragraph>
                </Text>
            </Body>
              <Header>
                <Title>¿Qué son las regalías (royalties) de reventa?</Title>
            </Header>
            <Body>
                <Text>
                        <Paragraph>
                            Las regalías son una comisión que el organizador del evento puede establecer para recibir una parte de los beneficios de la reventa de los tickets. El organizador puede establecer un porcentaje de regalías que se aplicará a cada reventa de un ticket. El porcentaje de regalías se aplica sobre el precio de venta del ticket.
                        </Paragraph>
                </Text>
            </Body>
              <Header>
                <Title>¿EventVerse se lleva comisión?</Title>
            </Header>
            <Body>
                <Text>
                        <Paragraph>
                           EventVerse se lleva una comisión del 5% sobre el precio de venta de cada ticket. Esta comisión se aplica en el momento de la compra del ticket.
                        </Paragraph>
                </Text>
            </Body>

             <Header>
                <Title>Autenticidad de los tickets</Title>
            </Header>
            <Body>
                <Text>
                        <Paragraph>
                        Los tickets son emitidos en la blockchain de Polygon como colección NFT, por lo que son únicos e irrepetibles. La autenticidad de los tickets está garantizada por la tecnología blockchain. Los tickets son irreproducibles y no se pueden falsificar. Los tickets son transferibles y se pueden revender. Los tickets son únicos y no se pueden intercambiar por otros tickets. Los tickets son inmutables y no se pueden modificar.
                        </Paragraph>
                </Text>
            </Body>

              <Header>
                <Title>¿Cómo funciona el registro?</Title>
            </Header>
            <Body>
                <Text>
                        <Paragraph>
                        El registro en EventVerse se puede realizar mediante una wallet de criptomonedas, mediante una cuenta de Google, correo electrónico o número de teléfono. En el caso de que el usuario se registre mediante una cuenta de correo electrónico, Google o número de teléfono, se generará una wallet de criptomonedas automáticamente y se vinculará a la cuenta del usuario. El usuario podrá acceder a su wallet de criptomonedas en cualquier momento mediante el icono de la wallet en la parte inferior izquierda de la pantalla.
                        </Paragraph>
                </Text>
            </Body>

                  <Header>
                <Title>¿Cómo añadir fondos a mi cuenta?</Title>
            </Header>
            <Body>
                <Text>
                        <Paragraph>
                        El usuario puede añadir fondos a su cuenta interactuando con el icono de la wallet en la parte inferior izquierda de la pantalla y seleccionar la opción de “Depositar fondos” (Múltiples opciones). El usuario debe de tener fondos en su wallet para poder comprar tickets o crear eventos.
                        </Paragraph>
                </Text>
            </Body>

            <Header>
                <Title>¿Puedo editar los datos de mi perfil?</Title>
            </Header>
            <Body>
                <Text>
                        <Paragraph>
                         Solo el organizador puede editar los datos de su perfil. Facilitando a EventVerse datos relevantes para la organización de eventos.
                        </Paragraph>
                </Text>
            </Body>

            <Header>
                <Title>¿Puedo poner en reventa mis tickets?</Title>
            </Header>
            <Body>
                <Text>
                        <Paragraph>
                            Si, los tickets son transferibles y se pueden revender. El organizador puede establecer un porcentaje de regalías que se aplicará a cada reventa de un ticket. El porcentaje de regalías se aplica sobre el precio de reventa del ticket. Para revender un ticket dirijase a la sección Mis Tickets y seleccione el ticket que desea revender. Una vez seleccionado el ticket, pulse el icono de “Revender” ($) y siga los pasos que se le indican.
                            El ticket permanecerá en el mercado de reventa de EventVerse durante 7 días. Si el ticket no se vende en ese periodo de tiempo, el ticket volverá a la cuenta del usuario.
                        </Paragraph>
                </Text>
            </Body>
        </Container>
  )
}

export default FAQ

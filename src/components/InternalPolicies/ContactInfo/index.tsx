import React from 'react'
import { ContactInfoContainer, ContactInfoHeader, ContactInfoFormContainer, ContactInfoFormButton, ContactInfoFormLabel, ContactInfoFormInput, ContactInfoFormTextArea, ContactInfoBody, ContactInfoTitle, ContactInfoText, ContactInfoParagraph } from './styles'
const ContactInfo = () => {
  return (
       <><ContactInfoContainer>
          <ContactInfoHeader>
              <ContactInfoTitle>Atención al cliente</ContactInfoTitle>
          </ContactInfoHeader>
          <ContactInfoBody>
              <ContactInfoText>
                  <ContactInfoParagraph>
                      Para EventVerse es muy importante el feedback de los usuarios, por lo que si usted tiene alguna duda o sugerencia, no dude en contactarnos a través de este formulario:
                  </ContactInfoParagraph>
              </ContactInfoText>
          </ContactInfoBody>
        <ContactInfoFormContainer>
            <div>
     <ContactInfoFormLabel htmlFor='user-name'>Nombre</ContactInfoFormLabel>
                <ContactInfoFormInput type='text' placeholder='Introduce tu nombre' id='user-name' name='user-name'></ContactInfoFormInput>

                <ContactInfoFormLabel htmlFor='email'>Email</ContactInfoFormLabel>
                <ContactInfoFormInput type='email' placeholder='Introduce una dirección válida de correo electrónico' id='email' name='email'></ContactInfoFormInput>

                <ContactInfoFormLabel htmlFor='message'>Mensaje</ContactInfoFormLabel>
                <ContactInfoFormTextArea placeholder='Introduce el mensaje que deseas enviarnos' id='message' name='message'></ContactInfoFormTextArea>
                <ContactInfoFormButton type="submit" >Enviar</ContactInfoFormButton>

            </div>

            <img src="/images/home-party.jpg" />

        </ContactInfoFormContainer>

      </ContactInfoContainer>

    </>
  )
}

export default ContactInfo

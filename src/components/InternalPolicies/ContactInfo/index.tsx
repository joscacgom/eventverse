import React from 'react'
import { ToastContainer, Zoom, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ContactInfoContainer, ContactInfoHeader, ContactInfoFormInputs, ContactInfoFormImage, ContactInfoFormContainer, ContactInfoFormButton, ContactInfoFormLabel, ContactInfoFormInput, ContactInfoFormTextArea, ContactInfoBody, ContactInfoTitle, ContactInfoText, ContactInfoParagraph } from './styles'

const ContactInfo = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        toast.success('Tu mensaje ha sido enviado exitosamente! 😍')
        form.reset()
      } else {
        toast.error('Hubo un error al enviar tu mensaje! 😭 Por favor, intenta nuevamente.')
      }
    } catch (error) {
      toast.error('Hubo un error al enviar tu mensaje! 😭 Por favor, intenta nuevamente.')
    }
  }

  return (
       <>
       <ToastContainer theme='colored' transition={Zoom} position='top-center' />
       <ContactInfoContainer>
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
        <ContactInfoFormContainer onSubmit={handleSubmit}>
            <ContactInfoFormInputs>
                <ContactInfoFormLabel htmlFor='name'>Nombre</ContactInfoFormLabel>
                <ContactInfoFormInput required type='text' placeholder='Introduce tu nombre' id='name' name='name'></ContactInfoFormInput>

                <ContactInfoFormLabel htmlFor='email'>Email</ContactInfoFormLabel>
                <ContactInfoFormInput required type='email' placeholder='Introduce una dirección válida de correo electrónico' id='email' name='email'></ContactInfoFormInput>

                <ContactInfoFormLabel htmlFor='message'>Mensaje</ContactInfoFormLabel>
                <ContactInfoFormTextArea required placeholder='Introduce el mensaje que deseas enviarnos' id='message' name='message'></ContactInfoFormTextArea>
                <ContactInfoFormButton type="submit" >Enviar</ContactInfoFormButton>

            </ContactInfoFormInputs>

            <ContactInfoFormImage src="/images/home-party.jpg" />

        </ContactInfoFormContainer>

      </ContactInfoContainer>

    </>
  )
}

export default ContactInfo

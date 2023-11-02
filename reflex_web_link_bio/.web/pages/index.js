import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Avatar, Box, Button, Center, HStack, Image, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Text, useColorMode, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import NextHead from "next/head"



export default function Component() {
  const state = useContext(StateContext)
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  const focusRef = useRef();
  
  // Main event loop.
  const [addEvents, connectError] = useContext(EventLoopContext)

  // Set focus to the specified element.
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  })

  // Route after the initial page hydration.
  useEffect(() => {
    const change_complete = () => addEvents(initialEvents.map((e) => ({...e})))
    router.events.on('routeChangeComplete', change_complete)
    return () => {
      router.events.off('routeChangeComplete', change_complete)
    }
  }, [router])


  return (
    <Fragment>
  <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <Modal isOpen={connectError !== null}>
  <ModalOverlay>
  <ModalContent>
  <ModalHeader>
  {`Connection Error`}
</ModalHeader>
  <ModalBody>
  <Text>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {`http://localhost:8000`}
</Text>
</ModalBody>
</ModalContent>
</ModalOverlay>
</Modal>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Box>
  <HStack sx={{"position": "stichy", "bg": "#3a12fa", "padding": "12px", "zIndex": "999"}}>
  <Text sx={{"height": "40px", "color": "White"}}>
  {`Publeonard`}
</Text>
</HStack>
  <Center>
  <VStack sx={{"colorText": "Black", "maxWidth": "560px", "width": "100%", "marginY": "2em"}}>
  <VStack>
  <Avatar size={`sm`}/>
  <Text>
  {`¡Hola! 👋🏻. Soy Leonardo Moreno Cubides`}
</Text>
  <Text>
  {` 👩🏻‍🔧Soy Ingeniero Mecánico y 👩🏻‍💻diseñador mecánico de detalle con experiencia en el sector y quiero automatizar los procesos mecánicos que tiene la industria
                 y el sector automotor con las nuevas tecnologías.  `}
</Text>
</VStack>
  <VStack>
  <Link as={NextLink} href={`https://twitch.tv/publeonardo1`} isExternal={true} sx={{"width": "100%"}}>
  <Button sx={{"width": "100%", "height": "100px", "display": "block", "padding": "0.5em", "borderRadius": "1em"}}>
  <HStack>
  <ArrowForwardIcon/>
  <VStack>
  <Text>
  {`Twitch - Canal de Leonardo`}
</Text>
  <Text>
  {`Twitch - Canal de Leonardo`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://github.com/Publeonard1`} isExternal={true} sx={{"width": "100%"}}>
  <Button sx={{"width": "100%", "height": "100px", "display": "block", "padding": "0.5em", "borderRadius": "1em"}}>
  <HStack>
  <ArrowForwardIcon/>
  <VStack>
  <Text>
  {`Github - Repositorio`}
</Text>
  <Text>
  {`Github - Repositorio`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://youtube.com/leonardo1mc`} isExternal={true} sx={{"width": "100%"}}>
  <Button sx={{"width": "100%", "height": "100px", "display": "block", "padding": "0.5em", "borderRadius": "1em"}}>
  <HStack>
  <ArrowForwardIcon/>
  <VStack>
  <Text>
  {`YouTube - Canal oficial de Leonardo`}
</Text>
  <Text>
  {`YouTube - Canal oficial de Leonardo`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://https://discord.com/channels/729672926432985098/1004479046207410366`} isExternal={true} sx={{"width": "100%"}}>
  <Button sx={{"width": "100%", "height": "100px", "display": "block", "padding": "0.5em", "borderRadius": "1em"}}>
  <HStack>
  <ArrowForwardIcon/>
  <VStack>
  <Text>
  {`Discord`}
</Text>
  <Text>
  {`Discord`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
</VStack>
</VStack>
</Center>
  <VStack>
  <Image src={`favicon.ico`}/>
  <Link as={NextLink} href={`https//github.com/Publeonar1`} isExternal={true}>
  {`© 2021-2023. Desde la vinculación en la rama`}
</Link>
  <Text>
  {`Pie de página del link_bio`}
</Text>
</VStack>
</Box>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}

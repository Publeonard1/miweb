import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Avatar, Box, Button, Center, Heading, HStack, Image, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Text, useColorMode, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import { ArrowForwardIcon, LinkIcon } from "@chakra-ui/icons"
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
  <HStack sx={{"position": "stichy", "bg": "lightgray", "paddingX": "1em", "paddingY": "0.5em", "zIndex": "999", "top": "0"}}>
  <Text>
  {`Publeonard`}
</Text>
</HStack>
  <Center>
  <VStack sx={{"colorText": "Black", "maxWidth": "560px", "width": "100%", "marginY": "2em"}}>
  <VStack spacing={`2em`} sx={{"fontFamily": "system-ui", "alingItems": "start"}}>
  <HStack>
  <Avatar name={`Publio Leonardo Moreno Cubides `} size={`lg`} sx={{"fontFamily": "system-ui"}}/>
  <VStack sx={{"alingItems": "start"}}>
  <Heading size={`md`}>
  {`Leonardo Moreno`}
</Heading>
  <Text sx={{"margingTop": "0px !important"}}>
  {`@Publeonard1`}
</Text>
  <HStack>
  <Link as={NextLink} href={`https//x.com/LeonardoMorCub`} isExternal={true} sx={{"textDecoration": "done", "_hover": {}}}>
  <LinkIcon/>
</Link>
  <Link as={NextLink} href={`https//x.com/LeonardoMorCub`} isExternal={true} sx={{"textDecoration": "done", "_hover": {}}}>
  <LinkIcon/>
</Link>
  <Link as={NextLink} href={`https//x.com/LeonardoMorCub`} isExternal={true} sx={{"textDecoration": "done", "_hover": {}}}>
  <LinkIcon/>
</Link>
</HStack>
</VStack>
</HStack>
  <Text>
  {` 👩🏻‍🔧Soy Ingeniero Mecánico y 👩🏻‍💻diseñador mecánico de detalle con experiencia en el sector y quiero automatizar los procesos mecánicos que tiene la industria
                 y el sector automotor con las nuevas tecnologías.  `}
</Text>
</VStack>
  <VStack sx={{"width": "100%"}}>
  <Heading size={`sm`} sx={{"width": "100%", "paddingTop": "1em"}}>
  {`Mis canales`}
</Heading>
  <Link as={NextLink} href={`https://twitch.tv/publeonardo1`} isExternal={true} sx={{"width": "100%", "textDecoration": "done", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "0.5em"}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "2em", "heigh": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em"}}>
  {`Twitch`}
</Text>
  <Text sx={{"fontSize": "0.8em"}}>
  {`Canal de directos`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://github.com/Publeonard1`} isExternal={true} sx={{"width": "100%", "textDecoration": "done", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "0.5em"}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "2em", "heigh": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em"}}>
  {`Github`}
</Text>
  <Text sx={{"fontSize": "0.8em"}}>
  {`Mi repositorio`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://youtube.com/leonardo1mc`} isExternal={true} sx={{"width": "100%", "textDecoration": "done", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "0.5em"}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "2em", "heigh": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em"}}>
  {`YouTube - Canal oficial de Leonardo`}
</Text>
  <Text sx={{"fontSize": "0.8em"}}>
  {`Mi canal de vídeos`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://https://discord.com/channels/729672926432985098/1004479046207410366`} isExternal={true} sx={{"width": "100%", "textDecoration": "done", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "0.5em"}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "2em", "heigh": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em"}}>
  {`Discord`}
</Text>
  <Text sx={{"fontSize": "0.8em"}}>
  {`Encuentros en Dsicord`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Heading size={`sm`} sx={{"width": "100%", "paddingTop": "1em"}}>
  {`Mis redes sociales.`}
</Heading>
  <Link as={NextLink} href={`https://twitch.tv/publeonardo1`} isExternal={true} sx={{"width": "100%", "textDecoration": "done", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "0.5em"}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "2em", "heigh": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em"}}>
  {`Instagram`}
</Text>
  <Text sx={{"fontSize": "0.8em"}}>
  {`@leonardo1m.c`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://github.com/Publeonard1`} isExternal={true} sx={{"width": "100%", "textDecoration": "done", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "0.5em"}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "2em", "heigh": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em"}}>
  {`Github`}
</Text>
  <Text sx={{"fontSize": "0.8em"}}>
  {`Mi repositorio`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://youtube.com/leonardo1mc`} isExternal={true} sx={{"width": "100%", "textDecoration": "done", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "0.5em"}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "2em", "heigh": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em"}}>
  {`YouTube - Canal oficial de Leonardo`}
</Text>
  <Text sx={{"fontSize": "0.8em"}}>
  {`Mi canal de vídeos`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://https://discord.com/channels/729672926432985098/1004479046207410366`} isExternal={true} sx={{"width": "100%", "textDecoration": "done", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "0.5em"}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "2em", "heigh": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em"}}>
  {`Discord`}
</Text>
  <Text sx={{"fontSize": "0.8em"}}>
  {`Encuentros en Dsicord`}
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
  <Link as={NextLink} href={`https//github.com/Publeonar1`} isExternal={true} sx={{"textDecoration": "done", "_hover": {}}}>
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

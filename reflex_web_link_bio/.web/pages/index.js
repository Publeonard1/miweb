import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Avatar, Box, Button, Center, Flex, Heading, HStack, Image, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Spacer, Text, useColorMode, VStack } from "@chakra-ui/react"
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
  <HStack sx={{"position": "stichy", "bg": "#171F26", "paddingX": "1em", "paddingY": "0.5em", "zIndex": "999", "top": "0"}}>
  <Box sx={{"fontFamily": "Comfortaa-Medium", "fontSize": "1.5em"}}>
  <Text as={`span`} sx={{"color": "#14A1F0"}}>
  {`Pub`}
</Text>
  <Text as={`span`} sx={{"color": "#3300CC"}}>
  {`leonard`}
</Text>
</Box>
  <Text>
  {`Publeonard`}
</Text>
</HStack>
  <Center>
  <VStack sx={{"colorText": "Black", "maxWidth": "560px", "width": "100%", "marginY": "2em"}}>
  <VStack spacing={`2em`} sx={{"fontFamily": "system-ui", "textAlign": "justify", "alingItems": "start"}}>
  <HStack>
  <Avatar name={`Publio Leonardo Moreno Cubides `} size={`lg`} sx={{"fontFamily": "system-ui"}}/>
  <VStack spacing={`1em`} sx={{"alingItems": "start"}}>
  <Heading size={`md`} sx={{"color": "#F1F2F4"}}>
  {`Leonardo Moreno`}
</Heading>
  <Text sx={{"marginTop": "0px !important", "color": "#C3C7CB"}}>
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
  <Flex sx={{"width": "100%"}}>
  <Box sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`+2`}
</Text>
  {` Años de experiencia`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`+100`}
</Text>
  {` En Instagram`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`+2`}
</Text>
  {` En GitHub`}
</Box>
</Flex>
  <Text sx={{"color": "#C3C7CB"}}>
  {` 👩🏻‍🔧Soy Ingeniero Mecánico y 👩🏻‍💻diseñador mecánico de detalle con experiencia en el sector y mi propósito automatizar los procesos mecánicos que tiene la industria
                 y el sector automotor con las nuevas tecnologías.  `}
</Text>
</VStack>
  <VStack spacing={`0.8em`} sx={{"width": "100%"}}>
  <Heading size={`md`} sx={{"width": "100%", "paddingTop": "1em", "color": "#F1F2F4"}}>
  {`Mis canales`}
</Heading>
  <Link as={NextLink} href={`https://twitch.tv/publeonardo1`} isExternal={true} sx={{"width": "100%", "textDecoration": "done", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "0.5em", "color": "#F1F2F4", "backgroundColor": "#171F26", "_hover": {"backgroundColor": "#3300CC"}}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "2em", "heigh": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em", "color": "#F1F2F4"}}>
  {`Twitch`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Canal de directos`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://github.com/Publeonard1`} isExternal={true} sx={{"width": "100%", "textDecoration": "done", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "0.5em", "color": "#F1F2F4", "backgroundColor": "#171F26", "_hover": {"backgroundColor": "#3300CC"}}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "2em", "heigh": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em", "color": "#F1F2F4"}}>
  {`Github`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Mi repositorio`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://youtube.com/leonardo1mc`} isExternal={true} sx={{"width": "100%", "textDecoration": "done", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "0.5em", "color": "#F1F2F4", "backgroundColor": "#171F26", "_hover": {"backgroundColor": "#3300CC"}}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "2em", "heigh": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em", "color": "#F1F2F4"}}>
  {`YouTube - Canal oficial de Leonardo`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Mi canal de vídeos`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://https://discord.com/channels/729672926432985098/1004479046207410366`} isExternal={true} sx={{"width": "100%", "textDecoration": "done", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "0.5em", "color": "#F1F2F4", "backgroundColor": "#171F26", "_hover": {"backgroundColor": "#3300CC"}}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "2em", "heigh": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em", "color": "#F1F2F4"}}>
  {`Discord`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Encuentros en Dsicord`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Heading size={`md`} sx={{"width": "100%", "paddingTop": "1em", "color": "#F1F2F4"}}>
  {`Mis redes sociales.`}
</Heading>
  <Link as={NextLink} href={`https://twitch.tv/publeonardo1`} isExternal={true} sx={{"width": "100%", "textDecoration": "done", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "0.5em", "color": "#F1F2F4", "backgroundColor": "#171F26", "_hover": {"backgroundColor": "#3300CC"}}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "2em", "heigh": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em", "color": "#F1F2F4"}}>
  {`Instagram`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`@leonardo1m.c`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://github.com/Publeonard1`} isExternal={true} sx={{"width": "100%", "textDecoration": "done", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "0.5em", "color": "#F1F2F4", "backgroundColor": "#171F26", "_hover": {"backgroundColor": "#3300CC"}}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "2em", "heigh": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em", "color": "#F1F2F4"}}>
  {`Github`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Mi repositorio`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://youtube.com/leonardo1mc`} isExternal={true} sx={{"width": "100%", "textDecoration": "done", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "0.5em", "color": "#F1F2F4", "backgroundColor": "#171F26", "_hover": {"backgroundColor": "#3300CC"}}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "2em", "heigh": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em", "color": "#F1F2F4"}}>
  {`YouTube - Canal oficial de Leonardo`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Mi canal de vídeos`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://https://discord.com/channels/729672926432985098/1004479046207410366`} isExternal={true} sx={{"width": "100%", "textDecoration": "done", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "0.5em", "color": "#F1F2F4", "backgroundColor": "#171F26", "_hover": {"backgroundColor": "#3300CC"}}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "2em", "heigh": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em", "color": "#F1F2F4"}}>
  {`Discord`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Encuentros en Dsicord`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
</VStack>
</VStack>
</Center>
  <VStack sx={{"marginButton": "2em", "paddingBottom": "2em", "color": "#A3ABB2"}}>
  <Image src={`favicon.ico`}/>
  <Link as={NextLink} href={`https//github.com/Publeonar1`} isExternal={true} sx={{"fontSize": "0.8em", "textDecoration": "done", "_hover": {}}}>
  {`© 2021-2023. Publeonard1 By Leonardo Moreno v1.1`}
</Link>
  <Text sx={{"fontSize": "0.8em", "margingTop": "0px !important"}}>
  {`IMAGINING AND CREATING A BETTER WORLD. FROM BOGOTÁ, MY CAPITAL CITY.`}
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

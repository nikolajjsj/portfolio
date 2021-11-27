import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import NextLink from 'next/link'
import React from 'react'

interface GridItemProps {
  children: React.ReactNode
  href: string
  title: string
  thumbnail: string
}

export const GridItem = ({
  children,
  href,
  title,
  thumbnail
}: GridItemProps) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <img src={thumbnail} alt={title} className="grid-item-thumbnail" width="100%" />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

interface WorkGridItemProps {
  children: React.ReactNode
  id: string
  title: string
  thumbnail: string
}

export const WorkGridItem = ({
  children,
  id,
  title,
  thumbnail
}: WorkGridItemProps) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/works/${id}`}>
      <LinkBox>
        <img src={thumbnail} alt={title} className="grid-item-thumbnail" width="100%" />
        <LinkOverlay>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
        object-fit: cover;
      }
    `}
  />
)

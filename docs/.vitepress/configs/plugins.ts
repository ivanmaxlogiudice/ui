import type markdownIt from 'markdown-it'
import mdContainer from 'markdown-it-container'
import type Token from 'markdown-it/lib/token'

export const mdPlugin = (md: markdownIt) => {
    md.use(mdContainer, 'card', {
        render: (tokens: Token[], idx: number) => {
            const token = tokens[idx]

            const title = token.info.trim().slice(5).trim()
            const titleHtml = md.render(title)

            return token.nesting === 1 ? `<Demo>${titleHtml}` : '</Demo>\n'
        },
    })

    md.use(mdContainer, 'code', {
        render: (tokens: Token[], idx: number) => {
            const token = tokens[idx]

            const demoName = token.info.trim().slice(5).trim()

            return token.nesting === 1 ? `<template #demo><${demoName} /></template><template #code>` : '</template>\n'
        },
    })
}

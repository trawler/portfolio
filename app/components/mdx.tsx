import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { highlight } from 'sugar-high'

function Table({ data }: { data: { headers: string[]; rows: string[][] } }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ))
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function CustomLink(props: { href: string; children?: React.ReactNode; className?: string;[key: string]: any }) {
  const { href, children, className, ...restProps } = props

  if (href.startsWith('/')) {
    return (
      <Link href={href} className={className || "text-green-400 hover:text-green-300"} {...restProps}>
        {children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a href={href} className={className || "text-green-400 hover:text-green-300"} {...restProps}>{children}</a>
  }

  return <a href={href} target="_blank" rel="noopener noreferrer" className={className || "text-green-400 hover:text-green-300"} {...restProps}>{children}</a>
}

function RoundedImage(props: { alt: string; src: string; className?: string; [key: string]: any }) {
  const { alt, src, className, ...restProps } = props
  return <Image alt={alt} src={src} className={className || "rounded-lg"} {...restProps} />
}

function Code({ children, ...props }: { children: string;[key: string]: any }) {
  let codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} className="bg-zinc-800/50 rounded px-1" {...props} />
}

function slugify(str: string | React.ReactNode): string {
  // Extract text content from React node if needed
  let text = typeof str === 'string' ? str : String(str)
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
}

function createHeading(level: number) {
  const Heading = ({ children }: { children: React.ReactNode }) => {
    // Extract text from children for slug
    let text = typeof children === 'string' ? children :
      Array.isArray(children) ? children.map(c => typeof c === 'string' ? c : '').join('') :
        String(children)
    let slug = slugify(text)
    return React.createElement(
      `h${level}`,
      {
        id: slug,
        className: 'text-green-400 font-semibold'
      },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor hover:text-green-300',
        }),
      ],
      children
    )
  }

  Heading.displayName = `Heading${level}`

  return Heading
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
}

export function CustomMDX(props) {
  return (
    <article className="prose prose-invert max-w-none">
      <div className="text-green-300 [&>*]:text-green-300 [&>p]:text-green-300">
        <MDXRemote
          {...props}
          components={{ ...components, ...(props.components || {}) }}
        />
      </div>
    </article>
  )
}
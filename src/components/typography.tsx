export function H1({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
      {children}
    </h1>
  )
}

export function H2({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-3">
      {children}
    </h2>
  )
}

export function H3({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  )
}

export function H4({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  )
}

export function P({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
}

export function BlockQuote({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  )
}

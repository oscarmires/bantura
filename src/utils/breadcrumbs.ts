// utils/breadcrumbs.ts
export function generateBreadcrumbs(path: string) {
  // Remove any query parameters
  const pathWithoutQuery = path.split('?')[0]

  // Split pathname into segments
  const segments = pathWithoutQuery.split('/').filter((segment) => segment)

  // Generate breadcrumb items
  return segments.map((segment, index) => {
    // Create URL for this breadcrumb
    const href = '/' + segments.slice(0, index + 1).join('/')

    // Format the segment text (capitalize, replace dashes with spaces, etc.)
    const text = segment
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

    return { text, href }
  })
}

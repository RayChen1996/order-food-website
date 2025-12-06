import { Children, createContext, isValidElement, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { MouseEvent, ReactNode } from 'react'

type RouterContextValue = {
  path: string
  navigate: (to: string) => void
}

const RouterContext = createContext<RouterContextValue | undefined>(undefined)

export const BrowserRouter = ({ children }: { children: ReactNode }) => {
  const [path, setPath] = useState(() => window.location.pathname || '/')

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname || '/')
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const navigate = useCallback((to: string) => {
    if (to !== path) {
      window.history.pushState({}, '', to)
      setPath(to)
    }
  }, [path])

  const value = useMemo(() => ({ path, navigate }), [path, navigate])

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
}

type RouteProps = {
  path: string
  element: ReactNode
}

export const Route = (_: RouteProps) => null

export const Routes = ({ children }: { children: ReactNode }) => {
  const ctx = useContext(RouterContext)
  if (!ctx) throw new Error('Routes must be used within a BrowserRouter')

  const routes = Children.toArray(children).flatMap((child) => {
    if (!isValidElement(child)) return []
    const props = child.props as RouteProps
    return props ? [{ path: props.path, element: props.element }] : []
  })

  const match =
    routes.find((route) => route.path === ctx.path) ||
    routes.find((route) => route.path === '*')

  return match ? <>{match.element}</> : null
}

export const Link = ({ to, children }: { to: string; children: ReactNode }) => {
  const ctx = useContext(RouterContext)
  if (!ctx) throw new Error('Link must be used within a BrowserRouter')

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    ctx.navigate(to)
  }

  return (
    <a href={to} onClick={handleClick} className="text-accent font-semibold">
      {children}
    </a>
  )
}

export const Navigate = ({ to }: { to: string }) => {
  const ctx = useContext(RouterContext)
  if (!ctx) throw new Error('Navigate must be used within a BrowserRouter')

  useEffect(() => {
    ctx.navigate(to)
  }, [ctx, to])

  return null
}

export const useNavigate = () => {
  const ctx = useContext(RouterContext)
  if (!ctx) throw new Error('useNavigate must be used within a BrowserRouter')
  return ctx.navigate
}

export const useLocation = () => {
  const ctx = useContext(RouterContext)
  if (!ctx) throw new Error('useLocation must be used within a BrowserRouter')
  return { pathname: ctx.path }
}

import { useContext } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ErrorFallback from './component/Fallback'
import RouteContext from './context/RouteContext/RouteContext'
import { componentMapping } from './context/RouteContext/routeConfig'

const App = () => {

  const { appRoutes } = useContext(RouteContext);

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, info) => {
        console.error('Caught by ErrorBoundary:', error, info);
      }}
    >
      <BrowserRouter>
        <Routes>
          {appRoutes?.map(({ key, path, isProtected, isAllowed }) => (
            <>
              {!isAllowed ?
                <Route key={key} path={path} element={<Navigate to='/un-authorised' />} />
                : isProtected ?
                  <Route key={key} path={path} element={<Navigate to='/login' />} />
                  : <Route key={key} path={path} Component={componentMapping[key]} />}
            </>
          ))}
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App

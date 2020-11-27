import React, {Suspense, lazy} from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Loading from './components/Loading/Loading';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './theme/dist/css/main.css';

const Layout = lazy(() => import('./components/Layout/Layout'));
const Home = lazy(() => import('./components/Home/Home'));
const About = lazy(() => import('./components/About/About'));
const Blog = lazy(() => import('./components/Blog/Blog'));
const Article = lazy(() => import('./components/Article/Article'));

function App() {
    return (
        <Suspense fallback={<Loading/>}>
            <BrowserRouter>
                <ErrorBoundary>
                    <Layout>
                        <Switch>
                            <Route path='/' exact component={Home}/>
                            <Route path='/about' exact component={About}/>
                            <Route path='/blog' exact component={Blog}/>
                            <Route path='/blog/:slug' exact component={Article}/>
                        </Switch>
                    </Layout>
                </ErrorBoundary>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;

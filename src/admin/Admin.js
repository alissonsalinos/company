import React, { Component } from 'react'
import {Route, Redirect} from 'react-router-dom'

import {auth} from './../firebase-config'
import AdminMenu from './AdminMenu'
import AdminPortfolio from './AdminPortfolio'

class Admin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            estaLogando: true,
            estaAutenticado: false,
            user: null
        }
    }

    componentDidMount() {
        auth.onAuthStateChanged( user => {
            this.setState({
                estaLogando: false,
                estaAutenticado: !!user,
                user            
            })
        })
    }

    render() {
        if(this.state.estaLogando){
            return (        
                <div className="container text-center align-center">
                    {/* <p><span className="glyphicon glyphicon-refresh" />aguarde ...</p> */}
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
                </div>    
            )
        }
        if(!this.state.estaAutenticado){
            return <Redirect to='/login' />
        }
        return (
            <div className="container">
                <h2>Painel Administrativo</h2>
                <Route path={`/`} component={AdminMenu} />
                <Route path={`${this.props.match.url}/portfolio`} component={AdminPortfolio} />
            </div>
        )
    }
}

export default Admin
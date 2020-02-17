import React, { useState } from "react";
import { Col, Form, FormGroup, Label, Input } from 'reactstrap'
import logo from '../../img/LOGO_CLASSIQUE_FOND TRANSPARENT_520X272.png'
import './LandingAdmin.css'
import {login} from '../UserFunctions'

const LandingAdmin = (props) => {

//hooks qui permet de ce login si email et password deja dans la bdd grace au register
  const [loginHooks, setLoginHooks] = useState({
    email: '',
    password: '',
    errors: {}
  })
   
    //onSubmit pour se login
    const onSubmit = (e) => {
      e.preventDefault()

      const user = {
        email: loginHooks.email,
        password: loginHooks.password
      }

      login(user).then(res => {
        console.log(res)
        if (res!=='user doesnt exist') {
          props.history.push(`/admin/homepage`)
          window.location.reload()
        }
      })
    }

  return (
      <div className='landing'>    
        <img className='logoLanding' src = {logo} alt='logo' />
          <div className='landingText'>
            <h1 className='landingH1'>Bienvenue dans l’espace <span className='textModif'>Admin</span> NeoWorker<span className='textModif'>.</span></h1>
              <h2 className='landingH2'>Connectez-vous pour gérer les NeoWorkers et leurs activités.</h2>
          </div>
          <div className='connectingForm'>
            <Form onSubmit={onSubmit}>
              <FormGroup row>
                <Label for="exampleEmail" sm={2}>Email</Label>
                  <Col sm={10}>
                    <Input className='inputEmail' type="email" name="email" id="exampleEmail" placeholder="Email" 
                        value={loginHooks.email}
                        onChange={(e) => { setLoginHooks({ ...loginHooks, email: e.target.value }) }}
                    />
                  </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="examplePassword" sm={2}>Password</Label>
                  <Col sm={10}>
                    <Input className='inputPassword' type="password" name="password" id="examplePassword" placeholder="Mot de passe" 
                        value={loginHooks.password}
                        onChange={(e) => { setLoginHooks({ ...loginHooks, password: e.target.value }) }}
                    />
                  </Col>
              </FormGroup>
            <a href='/'>Mot de passe oublié</a>
          <div className="text-center">
              <button className='btnConnection' type="submit">Se connecter</button>
          </div>
            </Form>
          </div>
      </div>
  );
}

export default LandingAdmin
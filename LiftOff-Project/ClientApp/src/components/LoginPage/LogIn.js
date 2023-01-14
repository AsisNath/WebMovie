import React, { Component } from 'react';

import { LogInForm } from './LogInForm';
import css from './CreateLogin.module.css';

export class LogIn extends Component {
    static displayName = LogIn.name;
  
    render() {
      return (
        <div className={css.format}>
          <LogInForm />
      </div>
      );
    }
  }

  /*
  export class LogIn extends Component {
    static displayName = LogIn.name;
  
    render() {
      return (
        <div>
            <h1>This is the log in page</h1>
        </div>
      );
    }
  }
  */
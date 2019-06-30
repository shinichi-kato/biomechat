import React ,{useState} from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import LandingPage from './landing/landing-page.jsx';
import ChatPage from './chat/chat-page.jsx';


const theme = createMuiTheme({
  palette: {
    primary: { main: '#FFB300' },
    secondary: { main: '#26C6DA' }
  },

});


function App() {
  const [mode, setMode] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      { mode === 0 ? (
          <LandingPage
            handleChangeMode={() => setMode(!mode)}
          />
        ) : (
          <ChatPage
            handleChangeMode={() => setMode(!mode)}
          />
        )
      }
    </ThemeProvider>
  );
}

export default App;

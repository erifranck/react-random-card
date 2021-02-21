import React from 'react';
import { RandomCard } from 'components/RandomCard/RandomCard';
import { ProfileIcon } from 'components/ProfileIcon/ProfileIcon';
import { Card } from 'components/Card/Card';
import characters from 'characters.json';
import './App.css';

interface Data {name: string, movie: string, image?: string};
interface State {
  selected?: Data
}

class App extends React.Component<null, State> {
  constructor() {
    super();
    this.state = {}
  }
  render () {
    const {selected} = this.state;
    return (
      <div className="App">
        <div className="app-content">
          <ProfileIcon> ? </ProfileIcon>
          <div class="app-cards">
            <div className="app-random-card">
              <RandomCard
                data={characters}
                onStop={(value: Data) => {
                  this.setState({selected: value})
                }}
                render={(data: Data) => (
                  <Card title={data.name} subTitle={data.movie} />
                )} />
            </div>
            <div className="app-random-card">
              <RandomCard
                blockStop={!selected}
                data={characters.filter(character => character.name !== selected?.name)}
                render={(data: Data) => {
                  return (
                    <Card title={data?.name} subTitle={data?.movie} />
                  )}
                } />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;

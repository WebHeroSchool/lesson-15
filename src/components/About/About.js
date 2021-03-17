import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

class About extends React.Component {
  state = {
    isLoading: true,
    repolist: []
  }

  componentDidMount() {
    octokit.repos.listForUser({
      username: 'RimmaMaybo'
    }).then(({ data }) => {
      this.setState({
        repolist: data,
        isLoading: false
      });
    });
  }

  render() {
    const { isLoading, repolist } = this.state;

    return (
      <CardContent>
        <h1>{ isLoading ? <CircularProgress /> : 'Мои репозитории' }</h1>
        {!isLoading && <ol>
            {repolist.map(repo => (<li key={repo.id}>
                {repo.name}
              </li>))}
          </ol>}
      </CardContent>
    );
  }
}

export default About;

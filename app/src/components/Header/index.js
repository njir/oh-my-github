import React, { PropTypes, Component, } from 'react'
import AppBar from 'material-ui/lib/app-bar'
import RaisedButton from 'material-ui/lib/raised-button'
import FontIcon from 'material-ui/lib/font-icon'
import IconButton from 'material-ui/lib/icon-button'
import IconMenu from 'material-ui/lib/menus/icon-menu'
import Avatar from 'material-ui/lib/avatar'
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert'
import Menu from 'material-ui/lib/menus/menu'
import MenuItem from 'material-ui/lib/menus/menu-item'
import Divider from 'material-ui/lib/divider'

import Colors from 'material-ui/lib/styles/colors'
import SvgIconActionFavorite from 'material-ui/lib/svg-icons/action/favorite'
import SvgIconActionCode from 'material-ui/lib/svg-icons/action/code'
import SvgIconActionAccountCircle from 'material-ui/lib/svg-icons/action/account-circle'

import { StatLabelStarFactory, StatLabelForkFactory, } from './StatIconLabel'

import { DEFAULT_REPOSITORY, } from '../../constants'

import { MainColors, HeaderColors, } from '../../theme'
import RaisedFontIconButton from './../RaisedFontIconButton'

const styles = {
  title: {
    fontSize: 20,
    fontWeight: 200,
  },

  appBar: {
    backgroundColor: MainColors[2],
    color: MainColors[4],
  },

  appBarRightElementAvatar: {
    borderRadius: '35%',
    width: 30,
    height: 30,
    boxShadow: '0 0 2px rgba(0, 0, 0, .3)',
    float: 'left',
    margin: '8px 0 0 15px',
  },

  appBarRightElementText: {
    padding: '15px 0px 0px 0px',
  },

  appBarRightElementButtons: {
    float: 'left',
    marginRight: 3,
    paddingTop: 11,
  },
}

export default class Header extends Component {
  renderIconMenu(user) {
    return (
      <IconMenu iconButtonElement={<IconButton iconStyle={{fill: MainColors[4],}}><MoreVertIcon /></IconButton>}
                targetOrigin={{horizontal: 'right', vertical: 'top',}}
                anchorOrigin={{horizontal: 'right', vertical: 'top',}} >
        <MenuItem touch linkButton target='_blank' href={`https://github.com/${user.login}`}
                  primaryText={user.login} leftIcon={<SvgIconActionAccountCircle color={HeaderColors.ID} />} />
        <Divider />
        <MenuItem touch linkButton target='_blank' href={`https://gist.github.com/${user.login}`}
                  primaryText={`Gist`} leftIcon={<SvgIconActionCode color={HeaderColors.GIST} />} />
        <MenuItem touch linkButton target='_blank' href={`https://github.com/stars/${user.login}`}
                  primaryText={`Favorite`} leftIcon={<SvgIconActionFavorite color={HeaderColors.FAVORITE} />} />
      </IconMenu>
    )
  }

  renderElementLeft() {
    return (
      <IconButton touch tooltipPosition='bottom-right'
                  linkButton href='http://github.com/oh-my-github/oh-my-github'>
        <FontIcon className='fa fa-github' />
      </IconButton>
    )
  }

  renderElementRight(user, repositories, iconMenu) {

    const repoStat = repositories.reduce((stat, repo) => {
      stat.starCount += repo.stargazers_count
      stat.forkCount += repo.forks_count
      return stat
    }, {starCount: 0, forkCount: 0,})

    const starButton = StatLabelStarFactory(repoStat.starCount)
    const forkButton = StatLabelForkFactory(repoStat.forkCount)

    return (
      <div>
        <div style={styles.appBarRightElementButtons}>
          {starButton}
          {forkButton}
        </div>
        <a href={`https://github.com/${user.login}`} target='_blank'>
          <Avatar src={user.avatar_url} style={styles.appBarRightElementAvatar} />
        </a>
        {iconMenu}
      </div>
    )
  }

  render() {
    const { user, repositories, } = this.props

    const iconMenu = this.renderIconMenu(user)
    const leftElement = this.renderElementLeft()
    const rightElement = this.renderElementRight(user, repositories, iconMenu)

    return (
      <header>
        <AppBar
          style={styles.appBar}
          title={<div className='hide-on-small-only'>Github Report</div>}
          titleStyle={styles.title}
          iconElementLeft={leftElement}
          iconElementRight={rightElement}
          />
      </header>
    )
  }
}

Header.propTypes = {
  user: PropTypes.object.isRequired,
  repositories: PropTypes.array.isRequired,
}

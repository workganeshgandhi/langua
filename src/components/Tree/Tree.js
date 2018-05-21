import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'

import styles from './styles'
import Notice from '../Notice/Notice'
import ButtonLink from '../Button/ButtonLink'

import { canonical, siteTitle } from '../../App'

const Tree = ({classes}) => (
  <div className={classes.tree}>
    <Helmet>
      <title>{siteTitle} Tree</title>
      <meta name='description' content='LanguaTree is a tool for drawing and labeling syntax trees.' />
      <link rel='canonical' href={`${canonical}tree/`} />
    </Helmet>
    <ButtonLink route='/tree/help'>
      Help
    </ButtonLink>
    <h2 className='toolTitle'>LanguaTree</h2>
    <Notice>This tool is still in planning.</Notice>
  </div>
)

export default injectSheet(styles)(Tree)

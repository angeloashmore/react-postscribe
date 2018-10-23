import React from 'react'
import PropTypes from 'prop-types'
import postscribe from 'postscribe'
import omit from 'lodash.omit'
import keys from 'lodash.keys'
import pick from 'lodash.pick'

export class PostScribe extends React.Component {
  static propTypes = {
    html: PropTypes.string.isRequired,
    afterAsync: PropTypes.func,
    afterDequeue: PropTypes.func,
    afterStreamStart: PropTypes.func,
    afterWrite: PropTypes.func,
    done: PropTypes.func,
    autoFix: PropTypes.bool,
    beforeEnqueue: PropTypes.func,
    beforeWrite: PropTypes.func,
    beforeWriteToken: PropTypes.func,
    error: PropTypes.func,
    releaseAsync: PropTypes.bool,
  }

  componentDidMount = () =>
    postscribe(
      this.el,
      this.props.html,
      pick(this.props, [
        'afterAsync',
        'afterDequeue',
        'afterStreamStart',
        'afterWrite',
        'done',
        'autoFix',
        'beforeEnqueue',
        'beforeWrite',
        'beforeWriteToken',
        'error',
        'releaseAsync',
      ]),
    )

  shouldComponentUpdate = () => false

  render = () =>
    React.createElement('div', {
      ...omit(this.props, keys(PostScribe.propTypes)),
      ref: comp => (this.el = comp),
    })
}

import { withInnerHooks } from 'react-inner-hooks-extension'

function Text(props: any) {
  return <div>{props.value}</div>
}

export default withInnerHooks(Text)

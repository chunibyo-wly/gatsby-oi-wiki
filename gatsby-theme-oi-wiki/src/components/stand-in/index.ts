import Img from './Img'
import Pre from './Pre'
import Code from './Code'
import Blockquote from './Blockquote'
import Table from './Table'
import List from './List'

export default {
  img: Img,
  pre: Pre,
  code: Code,
  blockquote: Blockquote,
  ...Table,
  ...List,
}
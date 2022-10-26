import { ExtractPropTypes } from 'vue'
export const ButtonType = ['primary', 'success', 'info', 'warning', 'danger','text']
export const ButtonSize = ['large', 'medium', 'samll', 'mini']
export const buttonProps = {
  type: {
    type: String,
    validator(value: string) {
      return ButtonType.includes(value)
    }
  },
  size: {
    type: String,
    validator(value: string) {
      return ButtonSize.includes(value)
    }
  }
}
export type ButtonProps = ExtractPropTypes<typeof buttonProps>
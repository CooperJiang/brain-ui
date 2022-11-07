import type { ExtractPropTypes, PropType } from 'vue';
import type { ButtonNativeType, ButtonSizeType, ButtonType } from './interface';

export const Props = {
  type: {
    type: String as PropType<ButtonType>,
    default: (): ButtonType => 'default',
    validator(value: ButtonType): boolean {
      return (['default', 'primary', 'success', 'info', 'danger', 'warning'] as const).includes(value);
    }
  },
  size: {
    type: String as PropType<ButtonSizeType>,
    validator(value: ButtonSizeType): boolean {
      return (['default', 'medium', 'small', 'mini', 'tiny'] as const).includes(value);
    }
  },
  plain: {
    type: Boolean,
    default: (): boolean => false
  },
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  circle: {
    type: Boolean,
    default: (): boolean => false
  },
  loading: {
    type: Boolean,
    default: (): boolean => false
  },
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  icon: {
    type: String,
    default: (): String => ''
  },
  autoFocus: {
    type: Boolean,
    default: (): boolean => false
  },
  nativeType: {
    type: String as PropType<ButtonNativeType>,
    default: (): ButtonNativeType => 'button',
    validator(value): boolean {
      return (['button', 'submit', 'reset'] as const).includes(value);
    }
  }
};

export const Emits = {
  click: (evt: MouseEvent): MouseEvent => evt
};

export type ButtonPropsType = ExtractPropTypes<typeof Props>;

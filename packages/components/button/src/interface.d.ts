import type { ButtonHTMLAttributes } from 'vue'

export type ButtonSizeType = 'default' | 'medium' | 'small' | 'mini' | 'tiny'

export type ButtonTargetType = '_blank' | '_self' | '_parent' | '_top'

export type ButtonType = 'default' | 'primary' | 'success' | 'info' | 'danger' | 'warning'

export type ButtonNativeType = NonNullable<ButtonHTMLAttributes['type']>
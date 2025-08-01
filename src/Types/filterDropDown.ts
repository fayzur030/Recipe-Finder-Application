export interface FilterDropDownProps {
  label: string
  options: string[]
  selectedOption: string | number
  onchangeHandler: (value: string) => void
}

import styled from 'styled-components'

const StatList = styled.ul`
text-align: left;
`

const StatItem = styled.li`
font-size: 16px;
letter-spacing: 0.03em;
text-transform: capitalize;

&:not(:last-child) {
    margin-bottom: 8px;
}
`

export { StatList, StatItem }
# ALA-frontend master branch

## 아키텍처

## Git Rule
`branch rule` <br/>

<strong>master</strong>
- 배포할 코드를 관리하는 브랜치
- CI/CD가 이루어질 브랜치


<strong>develop</strong>
- master에서 분기
- 기능 개발이 완료된 코드를 관리하는 브랜치
- feature에서 기능 개발이 완료되는 코드를 merge
- CI/CD가 이루어질 브랜치

<strong>feature</strong>
- develop에서 분기
- 기능 별로 관리하는 브랜치
- 브랜치명은 feat/#이슈번호-기능
    - (ex) feat/#1-Login
- 개발이 완료된 브랜치는 develop으로 PR

<strong>release</strong>
- develop에서 분기
- 릴리즈를 위한 브랜치
- 배포하기 전 마지막 테스트
- 완료된 경우 master로 merge

<strong>hotfix</strong>
- master에서 분기
- 배포된 서비스에 문제가 생기는 경우를 관리하는 브랜치
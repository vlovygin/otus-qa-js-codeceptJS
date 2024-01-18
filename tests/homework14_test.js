Feature('CodeceptJS OTUS homework')

Scenario('Find company by OGRN from main page', ({I}) => {
    const companyOgrn = '1177746618576'

    I.amOnPage('/')
    I.fillField('searchString', companyOgrn)
    I.click('button[type=submit]')

    I.see(companyOgrn, 'entity-search-result .td_name +td div:nth-child(1) .field-value')
})

Scenario('Find not exists company', ({I}) => {
    const companyName = 'myNotExistsCompanyName'

    I.amOnPage('/')
    I.fillField('searchString', companyName)
    I.click('button[type=submit]')

    I.see('По вашему запросу ни одной записи не найдено')
})

Scenario('Find significant info', ({I}) => {
    const significant = 'Стоимость чистых активов'

    I.amOnPage('/login')
    I.fillField('app-search-block input', significant)

    I.see('Федресурс', 'app-result-block')
})

Scenario('Find not exists significant info', ({I}) => {
    const significant = 'NotExistsSignificantInfo'

    I.amOnPage('/login')
    I.fillField('app-search-block input', significant)

    I.see('По вашему запросу ни одной записи не найдено', 'app-result-block')
})

Scenario('Navigate by brand logo', ({I}) => {
    I.amOnPage('/login')
    I.click('a.brand')

    I.dontSeeInCurrentUrl('/login')
    I.see('Поиск сведений о субъектах экономической деятельности')
})

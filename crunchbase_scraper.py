from bs4 import BeautifulSoup
import requests



# Issues:
# - companies that changed names

yclist_url = "http://yclist.com/"
crunchbase_url_prefix = "https://www.crunchbase.com/organization/"
# company name goes in between, e.g. https://www.crunchbase.com/organization/airbnb#/entity
crunchbase_url_suffix = "#/entity"

def scrapeYC_URLs():
    # Scrape names of companies from yclist.com first
    r = requests.get(yclist_url).content
    soup_yclist = BeautifulSoup(r, 'html.parser')
    print type(soup_yclist)

    tr_list = soup_yclist.find_all("tr", class_="operating")
    company_names = []
    company_urls = []
    for element in tr_list:
        name = element.contents[3].get_text()
        ascii_name = name.encode('ascii', 'ignore')
        company_names.append(ascii_name)
        c_url = crunchbase_url_prefix + ascii_name.lower() + crunchbase_url_suffix
        company_urls.append(c_url)
    return company_urls



def scrapeWebsites(url_list):
    for url in url_list:
        print url
        r = requests.get(url).content
        soup = BeautifulSoup(r, 'html.parser')
        print soup

        # Get the company name
        name_textHTML = soup.find('h1', id='profile_header_heading')
        print name_textHTML

        # Get overview information
        #   - Acquisitions
        #   - Total Equity Funding
        #   - Description
        #   - Founders
        #   - Categories

        # Get timeline information (getting information about news, e.g. executive changes)

        # Get news information


        # Get current team information, board members and advisors



if __name__ == "__main__":
    YC_Urls = []
    YC_Urls = scrapeYC_URLs()
    test_URL_list = ["https://mattermark.com/companies/airbnb.com"]
    scrapeWebsites(test_URL_list)


# Scrape information for each company in list obtained from yclist
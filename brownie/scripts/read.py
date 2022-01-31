from scripts.helpful_scripts import get_account
from brownie import network, config, interface


def main():
    account = get_account()
    veth_address = config["networks"][network.show_active()]["veth"]
    vbtc_address = config["networks"][network.show_active()]["vbtc"]

    print("getting the clearing house...")
    clearing_house = get_clearing_house()

    print("getting clearing house config...")
    clearing_house_config = get_clearing_house_config()

    print("getting the exchange...")
    exchange = get_exchange()

    print("getting vbtc mark twap...")
    twap_interval = get_twap_interval(clearing_house_config)


# Getting contracts


def get_clearing_house():
    """
    Returns the Clearing House contract
    """
    clearing_house_address = config["networks"][network.show_active()]["clearing_house"]
    clearing_house = interface.IClearingHouse(clearing_house_address)
    return clearing_house


def get_clearing_house_config():
    """
    Returns the Clearing House Config contract defined in the Clearing House
    """
    clearing_house = get_clearing_house()
    clearing_house_config_address = clearing_house.getClearingHouseConfig()
    clearing_house_config = interface.IClearingHouseConfig(
        clearing_house_config_address
    )
    return clearing_house_config


def get_exchange():
    """
    Returns the Exchange contract
    """
    clearing_house = get_clearing_house()
    exchange_address = clearing_house.getExchange()
    exchange = interface.IExchange(exchange_address)
    return exchange


# Contract functions
def get_twap_interval(clearing_house_config):
    """
    Returns the TWAP interval defined in the Clearing House Config
        Parameters:
            clearing_house_config(contract): Clearing House Config Contract
    """
    twap_interval = clearing_house_config.getTwapInterval()
    return twap_interval

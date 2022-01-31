from brownie import config, network, interface, PerpExploration
from scripts.helpful_scripts import get_account
from web3 import Web3


def deploy():

    account = get_account()
    clearing_house_address = config["networks"][network.show_network()][
        "clearing_house"
    ]
    perp_exploration = PerpExploration.deploy({"from": account})


def main():
    deploy()

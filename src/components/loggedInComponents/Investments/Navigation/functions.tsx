import { SupportedChainId, Registrar } from '@deusfinance/synchronizer-sdk'
import { hooks, Muon } from '../../DEUS/Synchronizer'

let date = new Date().toISOString().slice(0, 10)


/*
 * Internal data is updated once every 60 secondes. If you want access to the
 * latest information - for instance a real-time oracle quote - you could
 * call forceRefresh.
 */

  const list = hooks.useRegistrars(SupportedChainId.FANTOM)
  console.log(list)
  const forceRefresh = hooks.useForceRefreshCallback()

  const getSignatures = async () => {
    const result = await Muon.getSignatures(
      '0x082e19213683E1CD3E80634761283e99542c9198',
      'buy',
      SupportedChainId.FANTOM
    )
    console.log(result)
  }


export default list;
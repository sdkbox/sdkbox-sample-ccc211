declare module sdkbox {     module PluginAdMob {        /**        *  initialize the plugin instance.        */        export function init() : boolean;
        /**        * Set listener to listen for admob events        */        export function setListener(listener : object) : object;
        /**        * Get the listener        */        export function getListener() : object;
        /**        * Remove the listener, and can't listen to events anymore        */        export function removeListener() : object;
        /**        * Use this to get the version of the SDK.        * @return The version of the SDK.        */        export function getVersion() : string;
        /**        * Set test devices        */        export function setTestDevices(devices : string) : object;
        /**        * Cache ad with @name        */        export function cache(name : string) : object;
        /**        * show ad with @name        */        export function show(name : string) : object;
        /**        * hide ad with @name        *        * interstitial does not support hide        */        export function hide(name : string) : object;
        /**        * check whether ad available with @name        */        export function isAvailable(name : string) : boolean;
        /**        * get width of current banner        *        * @return: -1 means current banner is not available        */        export function getCurrBannerWidth(name : string) : number;
        /**        * get height of current banner        *        * @return: -1 means current banner is not available        */        export function getCurrBannerHeight(name : string) : number;
        /**        * get width of current banner in pixel        *        * @return -1 means current banner is not available        */        export function getCurrBannerWidthInPixel(name : string) : number;
        /**        * get height of current banner in pixel        *        * @return: -1 means current banner is not available        */        export function getCurrBannerHeightInPixel(name : string) : number;
        /**        * set GDPR. true: non-personalized ads, false: personalized ads.        */        export function setGDPR(enabled : boolean) : object;
        /**        * set auto cache ad after @seconds when cache ad failed.        * @seconds <= 0 means do not cache by PluginAdMob when cache ad failed.        */        export function setAutoCacheDelay(seconds : number) : object;
        /**        * set auto cache or not        *        * 1. do not load ads when init        * 2. do not load ads when close ads        * 3. do not load ads when load ads failed        */        export function setAutoCache(yes : boolean) : object;
        /**        * Sets the current app mute state.        * @param muted [true if the app is muted, false otherwise]        */        export function setAppMuted(muted : boolean) : object;
        /**        * Sets the current app volume.        * @param volume [the volume as a float from 0 (muted) to 1 (full media volume)]        */        export function setAppVolume(volume : number) : object;
    }     module AdMobListener {        export function adViewDidReceiveAd(name : string) : object;
        export function adViewDidFailToReceiveAdWithError(name : string , msg : string) : object;
        export function adViewWillPresentScreen(name : string) : object;
        export function adViewDidDismissScreen(name : string) : object;
        export function adViewWillDismissScreen(name : string) : object;
        export function adViewWillLeaveApplication(name : string) : object;
        export function reward(name : string , currency : string , amount : number) : object;
        export function adViewDidFailToPresentWithError(name : string , msg : string) : object;
    }}
import {Injectable} from '@angular/core';
import {StorageLocalKeyEnum} from '../shares/static';

@Injectable({
    providedIn: 'root'
})
export class StorageLocalService {

    private cache: Map<StorageLocalKeyEnum, any> = new Map();

    constructor() {
    }

    get(key: StorageLocalKeyEnum): any {
        let fromCache = this.cache.get(key);
        if (!!fromCache === false) {

            const value = localStorage.getItem(key);
            if (value == null || value === 'undefined' || value === undefined) {
                return null;
            }
            fromCache = JSON.parse(value);
            this.cache.set(key,
                fromCache);
        }
        return fromCache;
    }

    set(key: StorageLocalKeyEnum, value: any) {
        this.cache.set(key,
            value);
        localStorage.setItem(key,
            JSON.stringify(value));
    }

    remove(key: StorageLocalKeyEnum) {
        this.cache.delete(key);
        localStorage.removeItem(key);
    }

    removeAll() {
        localStorage.clear();
        this.cache.clear();
    }

    setApiToken(value: any): void {
        this.set(StorageLocalKeyEnum.API_TOKEN, value);
    }


    setSecondCodeCountDownStartDate(value: any): void {
        this.set(StorageLocalKeyEnum.SECOND_CODE_COUNTDOWN_START_DATE,
            value);
    }

    setSecondCode(value: any): void {
        this.set(StorageLocalKeyEnum.SECOND_CODE,
            value);
    }

    setMarketWatchSecurityCodes(value: any): void {
        this.set(StorageLocalKeyEnum.MARKET_WATCH_SECURITY_CODES,
            value);
    }

    setBrokerShortCodes(value: any): void {
        this.set(StorageLocalKeyEnum.BROKER_SHORT_CODES,
            value);
    }

    setCurrencyCode(value: any): void {
        this.set(StorageLocalKeyEnum.CURRENCY_CODE,
            value);
    }

    setOnboardingEnd(value: any): void {
        this.set(StorageLocalKeyEnum.ONBOARDING_END,
            value);
    }

    setOnboardingOrder(value: any): void {
        this.set(StorageLocalKeyEnum.ONBOARDING_ORDER,
            value);
    }

    setConsentEnd(value: any): void {
        this.set(StorageLocalKeyEnum.CONSENT_END,
            value);
    }

    setConsentRedirect(value: any): void {
        this.set(StorageLocalKeyEnum.CONSENT_REDIRECT,
            value);
    }

    setOnboardingHideTrading(value: any): any {
        this.set(StorageLocalKeyEnum.ONBOARDING_HIDE_TRADING,
            value);
    }

    setOnboardingProcessStatus(value: any): any {
        this.set(StorageLocalKeyEnum.ONBOARDING_PROCESS_STATUS,
            value);
    }

    setOnboardingAtLeastFinished(value: any): void {
        this.set(StorageLocalKeyEnum.ONBOARDING_AT_LEAST_FINISHED,
            value);
    }

    setOnboardingProcessDf(value: any): void {
        this.set(StorageLocalKeyEnum.ONBOARDING_PROCESS_DF,
            value);
    }

    setRole(value: any): void {
        this.set(StorageLocalKeyEnum.ROLE,
            value);
    }

    setCityId(value: any): void {
        this.set(StorageLocalKeyEnum.CITY_ID, value);
    }

    setBrand(value: any): void {
        this.set(StorageLocalKeyEnum.BRAND, value);
    }

    setShortCode(value: any): void {
        this.set(StorageLocalKeyEnum.SHORT_CODE,
            value);
    }

    setPushToken(value: any): void {
        this.set(StorageLocalKeyEnum.PUSH_TOKEN,
            value);
    }

    setNIN(value: any): void {
        this.set(StorageLocalKeyEnum.NIN,
            value);
    }

    setAppVersion(value: any): void {
        this.set(StorageLocalKeyEnum.APP_VERSION,
            value);
    }

    setDevicePlatform(value: any): void {
        this.set(StorageLocalKeyEnum.DEVICE_PLATFORM,
            value);
    }

    setDeviceUUID(value: any): void {
        this.set(StorageLocalKeyEnum.DEVICE_UUID,
            value);
    }

    setIsNeedToClearNewsCount(value: any): void {
        this.set(StorageLocalKeyEnum.IS_NEED_TO_CLEAR_NEWS_COUNT,
            value);
    }

    setInitialJPush(value: any): void {
        this.set(StorageLocalKeyEnum.INITIALIZE_J_PUSH,
            value);
    }

    setLanguageCode(value: any): void {
        this.set(StorageLocalKeyEnum.LANGUAGE_CODE,
            value);
    }

    setHideConfirmPriceChange(value: any): void {
        this.set(StorageLocalKeyEnum.HIDE_CONFIRM_PRICE_CHANGE,
            value);
    }

    setShowLogin(value: any): void {
        this.set(StorageLocalKeyEnum.SHOW_LOGIN,
            value);
    }

    setFirstInit(value: any): void {
        this.set(StorageLocalKeyEnum.FIRST_INIT,
            value);
    }

    setCategory(value: any): void {
        this.set(StorageLocalKeyEnum.CATEGORY, value);
    }


    getSecondCodeCountDownStartDate(): any {
        return this.get(StorageLocalKeyEnum.SECOND_CODE_COUNTDOWN_START_DATE);
    }

    getSecondCode(): any {
        return this.get(StorageLocalKeyEnum.SECOND_CODE);
    }

    getMarketWatchSecurityCodes(): any {
        return this.get(StorageLocalKeyEnum.MARKET_WATCH_SECURITY_CODES);
    }

    getBrokerShortCodes(): any {
        return this.get(StorageLocalKeyEnum.BROKER_SHORT_CODES);
    }

    getCurrencyCode(): any {
        return this.get(StorageLocalKeyEnum.CURRENCY_CODE);
    }

    getOnboardingEnd(): any {
        return this.get(StorageLocalKeyEnum.ONBOARDING_END);
    }

    getOnboardingOrder(): any {
        return this.get(StorageLocalKeyEnum.ONBOARDING_ORDER);
    }

    getConsentEnd(): any {
        return this.get(StorageLocalKeyEnum.CONSENT_END);
    }

    getConsentRedirect(): any {
        return this.get(StorageLocalKeyEnum.CONSENT_REDIRECT);
    }

    getOnboardingAtLeastFinished(): any {
        return this.get(StorageLocalKeyEnum.ONBOARDING_AT_LEAST_FINISHED);
    }

    getOnboardingHideTrading(): any {
        return this.get(StorageLocalKeyEnum.ONBOARDING_HIDE_TRADING);
    }

    getOnboardingProcessStatus(): any {
        return this.get(StorageLocalKeyEnum.ONBOARDING_PROCESS_STATUS);
    }

    getOnboardingProcessDf(): any {
        return this.get(StorageLocalKeyEnum.ONBOARDING_PROCESS_DF);
    }

    getRole(): any {
        return this.get(StorageLocalKeyEnum.ROLE);
    }

    getCityId(): any {
        return this.get(StorageLocalKeyEnum.CITY_ID);
    }

    getBrand(): any {
        return this.get(StorageLocalKeyEnum.BRAND);
    }

    getApiToken(): any {
        return this.get(StorageLocalKeyEnum.API_TOKEN);
    }

    getShortCode(): any {
        return this.get(StorageLocalKeyEnum.SHORT_CODE);
    }

    getPushToken(): any {
        return this.get(StorageLocalKeyEnum.PUSH_TOKEN);
    }

    getNIN(): any {
        return this.get(StorageLocalKeyEnum.NIN);
    }

    getAppVersion(): any {
        return this.get(StorageLocalKeyEnum.APP_VERSION);
    }

    getDevicePlatform(): any {
        return this.get(StorageLocalKeyEnum.DEVICE_PLATFORM);
    }

    getDeviceUUID(): any {
        return this.get(StorageLocalKeyEnum.DEVICE_UUID);
    }

    getIsNeedToClearNewsCount(): any {
        return this.get(StorageLocalKeyEnum.IS_NEED_TO_CLEAR_NEWS_COUNT);
    }

    getInitializeJPush(): any {
        return this.get(StorageLocalKeyEnum.INITIALIZE_J_PUSH);
    }

    getLanguageCode(): any {
        return this.get(StorageLocalKeyEnum.LANGUAGE_CODE);
    }

    getHideConfirmPriceChange(): any {
        return this.get(StorageLocalKeyEnum.HIDE_CONFIRM_PRICE_CHANGE);
    }

    getShowLogin(): any {
        return this.get(StorageLocalKeyEnum.SHOW_LOGIN);
    }

    getFirstInit(): any {
        return this.get(StorageLocalKeyEnum.FIRST_INIT);
    }

    getCategory(): any {
        return this.get(StorageLocalKeyEnum.CATEGORY);
    }


    removeOnboardingEnd() {
        this.remove(StorageLocalKeyEnum.ONBOARDING_END);
    }

    removeConsentEnd() {
        this.remove(StorageLocalKeyEnum.CONSENT_END);
    }

    removeOnboardingAtLeastFinished() {
        this.remove(StorageLocalKeyEnum.ONBOARDING_AT_LEAST_FINISHED);
    }

    removeOnboardingHideTrading() {
        this.remove(StorageLocalKeyEnum.ONBOARDING_HIDE_TRADING);
    }

    removeOnboardingProcessStatus() {
        this.remove(StorageLocalKeyEnum.ONBOARDING_PROCESS_STATUS);
    }

    removeOnboardingProcessDf() {
        this.remove(StorageLocalKeyEnum.ONBOARDING_PROCESS_DF);
    }

    removeInitialJPush() {
        this.remove(StorageLocalKeyEnum.INITIALIZE_J_PUSH);
    }

    removeIsNeedToClearNewsCount() {
        this.remove(StorageLocalKeyEnum.IS_NEED_TO_CLEAR_NEWS_COUNT);

    }

    removeCategory() {
        this.remove(StorageLocalKeyEnum.CATEGORY);
    }


}


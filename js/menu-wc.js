'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">client-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AccountModule.html" data-type="entity-link">AccountModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AccountModule-9f4d1ac4c0c7a19566caa26084d23403"' : 'data-target="#xs-components-links-module-AccountModule-9f4d1ac4c0c7a19566caa26084d23403"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AccountModule-9f4d1ac4c0c7a19566caa26084d23403"' :
                                            'id="xs-components-links-module-AccountModule-9f4d1ac4c0c7a19566caa26084d23403"' }>
                                            <li class="link">
                                                <a href="components/AccountChangePasswordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountChangePasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AccountDashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AccountNewProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountNewProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AccountProfileCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountProfileCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AccountProfileViewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountProfileViewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AccountRoutingModule.html" data-type="entity-link">AccountRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AlertDialogModule.html" data-type="entity-link">AlertDialogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AlertDialogModule-a86834d37e9857bc1edcee459e29e902"' : 'data-target="#xs-components-links-module-AlertDialogModule-a86834d37e9857bc1edcee459e29e902"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AlertDialogModule-a86834d37e9857bc1edcee459e29e902"' :
                                            'id="xs-components-links-module-AlertDialogModule-a86834d37e9857bc1edcee459e29e902"' }>
                                            <li class="link">
                                                <a href="components/ErrorDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ErrorDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InfoDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InfoDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SuccessDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SuccessDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WarningDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WarningDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppHomeModule.html" data-type="entity-link">AppHomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppHomeModule-3c12ac73350a7f37b58134d552e4cda0"' : 'data-target="#xs-components-links-module-AppHomeModule-3c12ac73350a7f37b58134d552e4cda0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppHomeModule-3c12ac73350a7f37b58134d552e4cda0"' :
                                            'id="xs-components-links-module-AppHomeModule-3c12ac73350a7f37b58134d552e4cda0"' }>
                                            <li class="link">
                                                <a href="components/HomeDashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeDashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppHomeRoutingModule.html" data-type="entity-link">AppHomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-f38486722451f19c80b56e3884939416"' : 'data-target="#xs-components-links-module-AppModule-f38486722451f19c80b56e3884939416"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-f38486722451f19c80b56e3884939416"' :
                                            'id="xs-components-links-module-AppModule-f38486722451f19c80b56e3884939416"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-099fded3768394ee5670e2fb9261bf4c"' : 'data-target="#xs-components-links-module-AuthModule-099fded3768394ee5670e2fb9261bf4c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-099fded3768394ee5670e2fb9261bf4c"' :
                                            'id="xs-components-links-module-AuthModule-099fded3768394ee5670e2fb9261bf4c"' }>
                                            <li class="link">
                                                <a href="components/AuthHomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuthSignInComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthSignInComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link">AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PermissionCentreModule.html" data-type="entity-link">PermissionCentreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PermissionCentreModule-e7c32881624e2d4eed9da13d40809601"' : 'data-target="#xs-components-links-module-PermissionCentreModule-e7c32881624e2d4eed9da13d40809601"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PermissionCentreModule-e7c32881624e2d4eed9da13d40809601"' :
                                            'id="xs-components-links-module-PermissionCentreModule-e7c32881624e2d4eed9da13d40809601"' }>
                                            <li class="link">
                                                <a href="components/PermissionCentreDashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PermissionCentreDashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PermissionCentreRoutingModule.html" data-type="entity-link">PermissionCentreRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsModule.html" data-type="entity-link">SettingsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SettingsModule-3fce763ffae23294dd663c90d27ed1d5"' : 'data-target="#xs-components-links-module-SettingsModule-3fce763ffae23294dd663c90d27ed1d5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingsModule-3fce763ffae23294dd663c90d27ed1d5"' :
                                            'id="xs-components-links-module-SettingsModule-3fce763ffae23294dd663c90d27ed1d5"' }>
                                            <li class="link">
                                                <a href="components/SettingsGeneralComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SettingsGeneralComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SettingsHomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SettingsHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SettingsThemesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SettingsThemesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsRoutingModule.html" data-type="entity-link">SettingsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-b9bd3fc1dfac506db13058f835e9efea"' : 'data-target="#xs-components-links-module-SharedModule-b9bd3fc1dfac506db13058f835e9efea"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-b9bd3fc1dfac506db13058f835e9efea"' :
                                            'id="xs-components-links-module-SharedModule-b9bd3fc1dfac506db13058f835e9efea"' }>
                                            <li class="link">
                                                <a href="components/ErrorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ErrorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadingIndicatorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoadingIndicatorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainLayoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserOptionsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserOptionsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-b9bd3fc1dfac506db13058f835e9efea"' : 'data-target="#xs-directives-links-module-SharedModule-b9bd3fc1dfac506db13058f835e9efea"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-b9bd3fc1dfac506db13058f835e9efea"' :
                                        'id="xs-directives-links-module-SharedModule-b9bd3fc1dfac506db13058f835e9efea"' }>
                                        <li class="link">
                                            <a href="directives/NavMenuDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavMenuDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedRoutingModule.html" data-type="entity-link">SharedRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AlertData.html" data-type="entity-link">AlertData</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChangePasswordResponse.html" data-type="entity-link">ChangePasswordResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/NavMenu.html" data-type="entity-link">NavMenu</a>
                            </li>
                            <li class="link">
                                <a href="classes/NewProfileResponse.html" data-type="entity-link">NewProfileResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/Position.html" data-type="entity-link">Position</a>
                            </li>
                            <li class="link">
                                <a href="classes/Profile.html" data-type="entity-link">Profile</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProfileCard.html" data-type="entity-link">ProfileCard</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProfileRole.html" data-type="entity-link">ProfileRole</a>
                            </li>
                            <li class="link">
                                <a href="classes/RefreshTokenResponse.html" data-type="entity-link">RefreshTokenResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignInResponse.html" data-type="entity-link">SignInResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/Token.html" data-type="entity-link">Token</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AlertDialogService.html" data-type="entity-link">AlertDialogService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DyanamicContentLoadingService.html" data-type="entity-link">DyanamicContentLoadingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpHelperService.html" data-type="entity-link">HttpHelperService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NavMenuService.html" data-type="entity-link">NavMenuService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfileQuery.html" data-type="entity-link">ProfileQuery</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfileStore.html" data-type="entity-link">ProfileStore</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ThemeSwitcherService.html" data-type="entity-link">ThemeSwitcherService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/ErrorInterceptor.html" data-type="entity-link">ErrorInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/JwtInterceptor.html" data-type="entity-link">JwtInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ProfileState.html" data-type="entity-link">ProfileState</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
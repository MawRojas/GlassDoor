import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { JobsRecruitingComponent } from './jobs-recruiting/jobs-recruiting.component';
import { OrderPipe } from './ngx-order.pipe';
import { RouterModule, Routes } from '@angular/router';
import { RoutingComponentComponent } from './routing-component/routing-component.component';
import { HttpClientModule } from '@angular/common/http';
import { SingleCompanyDetailsComponent } from './single-company-details/single-company-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SingleCompanyDescriptionComponent } from './single-company-description/single-company-description.component';
import { SingleCompanyLocationsComponent } from './single-company-locations/single-company-locations.component';
import { SingleCompanyBenefitsComponent } from './single-company-benefits/single-company-benefits.component';
import { SingleCompanyAwardsComponent } from './single-company-awards/single-company-awards.component';
import { SingleCompanyUpdatesComponent } from './single-company-updates/single-company-updates.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { EmailsAlertsComponent } from './emails-alerts/emails-alerts.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { EmailPreferencesComponent } from './email-preferences/email-preferences.component';
import { PasswordComponent } from './password/password.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { BillingAddressComponent } from './billing-address/billing-address.component';
import { CreditCardInfoComponent } from './credit-card-info/credit-card-info.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { CloseAccountComponent } from './close-account/close-account.component';
import { CurrentSubscriptionPlanComponent } from './current-subscription-plan/current-subscription-plan.component';
import { EmployeeReviewComponent } from './employee-review/employee-review.component';
import { InterviewReviewComponent } from './interview-review/interview-review.component';
import { RequestReviewComponent } from './request-review/request-review.component';
import { SingleEmployeeReviewComponent } from './single-employee-review/single-employee-review.component';
import { SingleInterviewReviewComponent } from './single-interview-review/single-interview-review.component';
import { BillingInformationComponent } from './billing-information/billing-information.component';
import { CreditCardInformationComponent } from './credit-card-information/credit-card-information.component';
import { SingleCompanyPhotosComponent } from './single-company-photos/single-company-photos.component';
import { AwardsPipePipe } from './pipes/awards-pipe.pipe';
import { ApplicantsPipe } from './applicants.pipe';
import { ApplicantsComponent } from './applicants/applicants.component';
import { JobPerformanceTitleComponent } from './job-performance-title/job-performance-title.component';
import { JobSlotsComponent } from './job-slots/job-slots.component';
import { JobPerformanceDayComponent } from './job-performance-day/job-performance-day.component';
import { SlottedJobsComponent } from './slotted-jobs/slotted-jobs.component';
import { UnslottedJobsComponent } from './unslotted-jobs/unslotted-jobs.component';
import { SingleCompanyLogoComponent } from './single-company-logo/single-company-logo.component';

//Add your routes here
const routes: Routes = [
  {path: 'company_details', component: CompanyDetailsComponent},
  {path: 'company_details/:id', component: SingleCompanyDetailsComponent},
  {path: 'company_details/description/:id', component: SingleCompanyDescriptionComponent},
  {path: 'company_details/locations/:id', component: SingleCompanyLocationsComponent},
  {path: 'company_details/benefits/:id', component: SingleCompanyBenefitsComponent},
  {path: 'company_details/awards/:id', component: SingleCompanyAwardsComponent},
  {path: 'company_details/updates/:id', component: SingleCompanyUpdatesComponent},
  {path: 'company_details/photos/:id', component: SingleCompanyPhotosComponent},
  {path: 'company_details/logo/:id', component: SingleCompanyLogoComponent},
  {path:'account_settings', component:BasicInfoComponent},
  {path:'password_reset', component:PasswordComponent},
  {path: 'account_info', component:UserSettingsComponent},
  {path:'notifications',component:EmailsAlertsComponent},
  {path:'payment_settings', component:BillingAddressComponent},
  {path:'subscriptions', component:CurrentSubscriptionPlanComponent},
  {path:'add_subscription',component:SubscriptionsComponent},
  {path: 'applicants', component: ApplicantsComponent},
  {path: 'job-performance-day', component: JobPerformanceDayComponent},
  {path: 'job-performance-title', component: JobPerformanceTitleComponent},
  {path: 'job-slots', component: JobSlotsComponent},
  {path: 'slotted-jobs', component: SlottedJobsComponent},
  {path: 'unslotted-jobs', component: UnslottedJobsComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path:'add_subscription',component:SubscriptionsComponent},
  {path: 'employee_reviews', component: EmployeeReviewComponent},
  {path: 'interview_reviews', component: InterviewReviewComponent},
  {path: 'request_review', component: RequestReviewComponent},
  {path: 'employee_reviews/:id', component:SingleEmployeeReviewComponent},
  {path: 'interview_reviews/:id', component: SingleInterviewReviewComponent},
  {path: 'billing_information', component:BillingInformationComponent},
  {path: 'card_details', component:CreditCardInformationComponent}
];  

@NgModule({
  declarations: [
    AppComponent,
    OrderPipe,
    CompanyDetailsComponent,
    RegistrationComponent,
    ReviewsComponent,
    JobsRecruitingComponent,
    UserSettingsComponent,
    RoutingComponentComponent,
    SingleCompanyDetailsComponent,
    SingleCompanyDescriptionComponent,
    SingleCompanyLocationsComponent,
    SingleCompanyBenefitsComponent,
    SingleCompanyAwardsComponent,
    SingleCompanyUpdatesComponent,
    UserSettingsComponent,  
    PasswordComponent,
    PaymentInfoComponent,
    SubscriptionsComponent,
    EmailPreferencesComponent,
    EmailsAlertsComponent,
    PaymentMethodsComponent,
    BillingAddressComponent,
    CreditCardInfoComponent,
    CurrentSubscriptionPlanComponent,
    SubscriptionsComponent,
    BasicInfoComponent,
    AccountInfoComponent,
    RoutingComponentComponent,
    SingleCompanyDetailsComponent,
    SingleCompanyDescriptionComponent,
    EmployeeReviewComponent,
    InterviewReviewComponent,
    RequestReviewComponent,
    SingleEmployeeReviewComponent,
    SingleInterviewReviewComponent,
    BillingInformationComponent,
    CreditCardInformationComponent,
    CloseAccountComponent,
    SingleCompanyPhotosComponent,
    SingleCompanyLogoComponent,
    AwardsPipePipe,
    ApplicantsPipe,
    ApplicantsComponent,
    JobPerformanceTitleComponent,
    JobSlotsComponent,
    JobPerformanceDayComponent,
    SlottedJobsComponent,
    UnslottedJobsComponent,
    SingleCompanyLogoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [OrderPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
